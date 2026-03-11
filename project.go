// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

package ericstagingco5

import (
	"context"
	"errors"
	"fmt"
	"net/http"
	"net/url"
	"slices"

	"github.com/meorphis/test-repo-9/internal/apijson"
	"github.com/meorphis/test-repo-9/internal/apiquery"
	"github.com/meorphis/test-repo-9/internal/requestconfig"
	"github.com/meorphis/test-repo-9/option"
	"github.com/meorphis/test-repo-9/packages/param"
	"github.com/meorphis/test-repo-9/packages/respjson"
)

// ProjectService contains methods and other services that help with interacting
// with the eric-staging-co-5 API.
//
// Note, unlike clients, this service does not read variables from the environment
// automatically. You should not instantiate this service directly, and instead use
// the [NewProjectService] method instead.
type ProjectService struct {
	Options  []option.RequestOption
	Branches ProjectBranchService
	Configs  ProjectConfigService
	Snippets ProjectSnippetService
}

// NewProjectService generates a new service that applies the given options to each
// request. These options are applied after the parent client's options (if there
// is one), and before any request-specific options.
func NewProjectService(opts ...option.RequestOption) (r ProjectService) {
	r = ProjectService{}
	r.Options = opts
	r.Branches = NewProjectBranchService(opts...)
	r.Configs = NewProjectConfigService(opts...)
	r.Snippets = NewProjectSnippetService(opts...)
	return
}

// Create a new project.
func (r *ProjectService) New(ctx context.Context, body ProjectNewParams, opts ...option.RequestOption) (res *Project, err error) {
	opts = slices.Concat(r.Options, opts)
	path := "v0/projects"
	err = requestconfig.ExecuteNewRequest(ctx, http.MethodPost, path, body, &res, opts...)
	return res, err
}

// Retrieve a project by name.
func (r *ProjectService) Get(ctx context.Context, project string, opts ...option.RequestOption) (res *Project, err error) {
	opts = slices.Concat(r.Options, opts)
	if project == "" {
		err = errors.New("missing required project parameter")
		return nil, err
	}
	path := fmt.Sprintf("v0/projects/%s", url.PathEscape(project))
	err = requestconfig.ExecuteNewRequest(ctx, http.MethodGet, path, nil, &res, opts...)
	return res, err
}

// Update a project's properties.
func (r *ProjectService) Update(ctx context.Context, project string, body ProjectUpdateParams, opts ...option.RequestOption) (res *Project, err error) {
	opts = slices.Concat(r.Options, opts)
	if project == "" {
		err = errors.New("missing required project parameter")
		return nil, err
	}
	path := fmt.Sprintf("v0/projects/%s", url.PathEscape(project))
	err = requestconfig.ExecuteNewRequest(ctx, http.MethodPatch, path, body, &res, opts...)
	return res, err
}

// List projects in an organization, from oldest to newest.
func (r *ProjectService) List(ctx context.Context, query ProjectListParams, opts ...option.RequestOption) (res *ProjectListResponse, err error) {
	opts = slices.Concat(r.Options, opts)
	path := "v0/projects"
	err = requestconfig.ExecuteNewRequest(ctx, http.MethodGet, path, query, &res, opts...)
	return res, err
}

// Generates an AI commit message by comparing two git refs in the SDK repository.
func (r *ProjectService) GenerateCommitMessage(ctx context.Context, project string, params ProjectGenerateCommitMessageParams, opts ...option.RequestOption) (res *ProjectGenerateCommitMessageResponse, err error) {
	opts = slices.Concat(r.Options, opts)
	if project == "" {
		err = errors.New("missing required project parameter")
		return nil, err
	}
	path := fmt.Sprintf("v0/projects/%s/generate_commit_message", url.PathEscape(project))
	err = requestconfig.ExecuteNewRequest(ctx, http.MethodPost, path, params, &res, opts...)
	return res, err
}

// A project is a collection of SDKs generated from the same set of config files.
type Project struct {
	ConfigRepo  string `json:"config_repo" api:"required"`
	DisplayName string `json:"display_name" api:"required"`
	// Any of "project".
	Object  ProjectObject `json:"object" api:"required"`
	Org     string        `json:"org" api:"required"`
	Slug    string        `json:"slug" api:"required"`
	Targets []Target      `json:"targets" api:"required"`
	// JSON contains metadata for fields, check presence with [respjson.Field.Valid].
	JSON struct {
		ConfigRepo  respjson.Field
		DisplayName respjson.Field
		Object      respjson.Field
		Org         respjson.Field
		Slug        respjson.Field
		Targets     respjson.Field
		ExtraFields map[string]respjson.Field
		raw         string
	} `json:"-"`
}

// Returns the unmodified JSON received from the API
func (r Project) RawJSON() string { return r.JSON.raw }
func (r *Project) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

type ProjectObject string

const (
	ProjectObjectProject ProjectObject = "project"
)

type ProjectListResponse struct {
	Data       []Project `json:"data" api:"required"`
	HasMore    bool      `json:"has_more" api:"required"`
	NextCursor string    `json:"next_cursor"`
	// JSON contains metadata for fields, check presence with [respjson.Field.Valid].
	JSON struct {
		Data        respjson.Field
		HasMore     respjson.Field
		NextCursor  respjson.Field
		ExtraFields map[string]respjson.Field
		raw         string
	} `json:"-"`
}

// Returns the unmodified JSON received from the API
func (r ProjectListResponse) RawJSON() string { return r.JSON.raw }
func (r *ProjectListResponse) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

type ProjectGenerateCommitMessageResponse struct {
	AICommitMessage string `json:"ai_commit_message" api:"required"`
	// JSON contains metadata for fields, check presence with [respjson.Field.Valid].
	JSON struct {
		AICommitMessage respjson.Field
		ExtraFields     map[string]respjson.Field
		raw             string
	} `json:"-"`
}

// Returns the unmodified JSON received from the API
func (r ProjectGenerateCommitMessageResponse) RawJSON() string { return r.JSON.raw }
func (r *ProjectGenerateCommitMessageResponse) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

type ProjectNewParams struct {
	// Human-readable project name
	DisplayName string `json:"display_name" api:"required"`
	// Organization name
	Org string `json:"org" api:"required"`
	// File contents to commit
	Revision map[string]ProjectNewParamsRevisionUnion `json:"revision,omitzero" api:"required"`
	// Project name/slug
	Slug string `json:"slug" api:"required"`
	// Targets to generate for
	Targets []Target `json:"targets,omitzero" api:"required"`
	paramObj
}

func (r ProjectNewParams) MarshalJSON() (data []byte, err error) {
	type shadow ProjectNewParams
	return param.MarshalObject(r, (*shadow)(&r))
}
func (r *ProjectNewParams) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

// Only one field can be non-zero.
//
// Use [param.IsOmitted] to confirm if a field is set.
type ProjectNewParamsRevisionUnion struct {
	OfProjectNewsRevisionContent *ProjectNewParamsRevisionContent `json:",omitzero,inline"`
	OfProjectNewsRevisionURL     *ProjectNewParamsRevisionURL     `json:",omitzero,inline"`
	paramUnion
}

func (u ProjectNewParamsRevisionUnion) MarshalJSON() ([]byte, error) {
	return param.MarshalUnion(u, u.OfProjectNewsRevisionContent, u.OfProjectNewsRevisionURL)
}
func (u *ProjectNewParamsRevisionUnion) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, u)
}

// The property Content is required.
type ProjectNewParamsRevisionContent struct {
	// File content
	Content string `json:"content" api:"required"`
	paramObj
}

func (r ProjectNewParamsRevisionContent) MarshalJSON() (data []byte, err error) {
	type shadow ProjectNewParamsRevisionContent
	return param.MarshalObject(r, (*shadow)(&r))
}
func (r *ProjectNewParamsRevisionContent) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

// The property URL is required.
type ProjectNewParamsRevisionURL struct {
	// URL to fetch file content from
	URL string `json:"url" api:"required"`
	paramObj
}

func (r ProjectNewParamsRevisionURL) MarshalJSON() (data []byte, err error) {
	type shadow ProjectNewParamsRevisionURL
	return param.MarshalObject(r, (*shadow)(&r))
}
func (r *ProjectNewParamsRevisionURL) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

type ProjectUpdateParams struct {
	DisplayName param.Opt[string] `json:"display_name,omitzero"`
	paramObj
}

func (r ProjectUpdateParams) MarshalJSON() (data []byte, err error) {
	type shadow ProjectUpdateParams
	return param.MarshalObject(r, (*shadow)(&r))
}
func (r *ProjectUpdateParams) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

type ProjectListParams struct {
	// Pagination cursor from a previous response
	Cursor param.Opt[string] `query:"cursor,omitzero" json:"-"`
	// Maximum number of projects to return, defaults to 10 (maximum: 100).
	Limit param.Opt[float64] `query:"limit,omitzero" json:"-"`
	Org   param.Opt[string]  `query:"org,omitzero" json:"-"`
	paramObj
}

// URLQuery serializes [ProjectListParams]'s query parameters as `url.Values`.
func (r ProjectListParams) URLQuery() (v url.Values, err error) {
	return apiquery.MarshalWithSettings(r, apiquery.QuerySettings{
		ArrayFormat:  apiquery.ArrayQueryFormatComma,
		NestedFormat: apiquery.NestedQueryFormatBrackets,
	})
}

type ProjectGenerateCommitMessageParams struct {
	// Language target
	//
	// Any of "python", "node", "typescript", "java", "kotlin", "go", "ruby",
	// "terraform", "cli", "csharp", "php", "openapi", "sql".
	Target ProjectGenerateCommitMessageParamsTarget `query:"target,omitzero" api:"required" json:"-"`
	// Base ref for comparison
	BaseRef string `json:"base_ref" api:"required"`
	// Head ref for comparison
	HeadRef string `json:"head_ref" api:"required"`
	paramObj
}

func (r ProjectGenerateCommitMessageParams) MarshalJSON() (data []byte, err error) {
	type shadow ProjectGenerateCommitMessageParams
	return param.MarshalObject(r, (*shadow)(&r))
}
func (r *ProjectGenerateCommitMessageParams) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

// URLQuery serializes [ProjectGenerateCommitMessageParams]'s query parameters as
// `url.Values`.
func (r ProjectGenerateCommitMessageParams) URLQuery() (v url.Values, err error) {
	return apiquery.MarshalWithSettings(r, apiquery.QuerySettings{
		ArrayFormat:  apiquery.ArrayQueryFormatComma,
		NestedFormat: apiquery.NestedQueryFormatBrackets,
	})
}

// Language target
type ProjectGenerateCommitMessageParamsTarget string

const (
	ProjectGenerateCommitMessageParamsTargetPython     ProjectGenerateCommitMessageParamsTarget = "python"
	ProjectGenerateCommitMessageParamsTargetNode       ProjectGenerateCommitMessageParamsTarget = "node"
	ProjectGenerateCommitMessageParamsTargetTypescript ProjectGenerateCommitMessageParamsTarget = "typescript"
	ProjectGenerateCommitMessageParamsTargetJava       ProjectGenerateCommitMessageParamsTarget = "java"
	ProjectGenerateCommitMessageParamsTargetKotlin     ProjectGenerateCommitMessageParamsTarget = "kotlin"
	ProjectGenerateCommitMessageParamsTargetGo         ProjectGenerateCommitMessageParamsTarget = "go"
	ProjectGenerateCommitMessageParamsTargetRuby       ProjectGenerateCommitMessageParamsTarget = "ruby"
	ProjectGenerateCommitMessageParamsTargetTerraform  ProjectGenerateCommitMessageParamsTarget = "terraform"
	ProjectGenerateCommitMessageParamsTargetCli        ProjectGenerateCommitMessageParamsTarget = "cli"
	ProjectGenerateCommitMessageParamsTargetCsharp     ProjectGenerateCommitMessageParamsTarget = "csharp"
	ProjectGenerateCommitMessageParamsTargetPhp        ProjectGenerateCommitMessageParamsTarget = "php"
	ProjectGenerateCommitMessageParamsTargetOpenAPI    ProjectGenerateCommitMessageParamsTarget = "openapi"
	ProjectGenerateCommitMessageParamsTargetSql        ProjectGenerateCommitMessageParamsTarget = "sql"
)
