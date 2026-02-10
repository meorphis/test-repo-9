// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

package ericstagingco5

import (
	"context"
	"errors"
	"fmt"
	"net/http"
	"net/url"
	"slices"

	"github.com/stainless-sdks-staging/eric-staging-co-5-go/internal/apijson"
	"github.com/stainless-sdks-staging/eric-staging-co-5-go/internal/requestconfig"
	"github.com/stainless-sdks-staging/eric-staging-co-5-go/option"
	"github.com/stainless-sdks-staging/eric-staging-co-5-go/packages/param"
	"github.com/stainless-sdks-staging/eric-staging-co-5-go/packages/respjson"
)

// ProjectSnippetService contains methods and other services that help with
// interacting with the eric-staging-co-5 API.
//
// Note, unlike clients, this service does not read variables from the environment
// automatically. You should not instantiate this service directly, and instead use
// the [NewProjectSnippetService] method instead.
type ProjectSnippetService struct {
	Options []option.RequestOption
}

// NewProjectSnippetService generates a new service that applies the given options
// to each request. These options are applied after the parent client's options (if
// there is one), and before any request-specific options.
func NewProjectSnippetService(opts ...option.RequestOption) (r ProjectSnippetService) {
	r = ProjectSnippetService{}
	r.Options = opts
	return
}

func (r *ProjectSnippetService) Request(ctx context.Context, projectName string, body ProjectSnippetRequestParams, opts ...option.RequestOption) (res *ProjectSnippetRequestResponse, err error) {
	opts = slices.Concat(r.Options, opts)
	if projectName == "" {
		err = errors.New("missing required projectName parameter")
		return
	}
	path := fmt.Sprintf("v0/projects/%s/snippets/request", url.PathEscape(projectName))
	err = requestconfig.ExecuteNewRequest(ctx, http.MethodPost, path, body, &res, opts...)
	return
}

type Target string

const (
	TargetNode       Target = "node"
	TargetTypescript Target = "typescript"
	TargetPython     Target = "python"
	TargetGo         Target = "go"
	TargetJava       Target = "java"
	TargetKotlin     Target = "kotlin"
	TargetRuby       Target = "ruby"
	TargetTerraform  Target = "terraform"
	TargetCli        Target = "cli"
	TargetPhp        Target = "php"
	TargetCsharp     Target = "csharp"
	TargetSql        Target = "sql"
	TargetOpenAPI    Target = "openapi"
)

type ProjectSnippetRequestResponse struct {
	Snippet string `json:"snippet,required"`
	// JSON contains metadata for fields, check presence with [respjson.Field.Valid].
	JSON struct {
		Snippet     respjson.Field
		ExtraFields map[string]respjson.Field
		raw         string
	} `json:"-"`
}

// Returns the unmodified JSON received from the API
func (r ProjectSnippetRequestResponse) RawJSON() string { return r.JSON.raw }
func (r *ProjectSnippetRequestResponse) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

type ProjectSnippetRequestParams struct {
	// Any of "node", "typescript", "python", "go", "java", "kotlin", "ruby",
	// "terraform", "cli", "php", "csharp", "sql", "openapi".
	Language Target                                  `json:"language,omitzero,required"`
	Request  ProjectSnippetRequestParamsRequestUnion `json:"request,omitzero,required"`
	// Any of "next", "latest_released".
	Version ProjectSnippetRequestParamsVersion `json:"version,omitzero,required"`
	paramObj
}

func (r ProjectSnippetRequestParams) MarshalJSON() (data []byte, err error) {
	type shadow ProjectSnippetRequestParams
	return param.MarshalObject(r, (*shadow)(&r))
}
func (r *ProjectSnippetRequestParams) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

// Only one field can be non-zero.
//
// Use [param.IsOmitted] to confirm if a field is set.
type ProjectSnippetRequestParamsRequestUnion struct {
	OfProjectSnippetRequestsRequestObject *ProjectSnippetRequestParamsRequestObject `json:",omitzero,inline"`
	OfVariant2                            *ProjectSnippetRequestParamsRequestObject `json:",omitzero,inline"`
	paramUnion
}

func (u ProjectSnippetRequestParamsRequestUnion) MarshalJSON() ([]byte, error) {
	return param.MarshalUnion(u, u.OfProjectSnippetRequestsRequestObject, u.OfVariant2)
}
func (u *ProjectSnippetRequestParamsRequestUnion) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, u)
}

// The properties Method, Parameters, Path are required.
type ProjectSnippetRequestParamsRequestObject struct {
	Method     string                                              `json:"method,required"`
	Parameters []ProjectSnippetRequestParamsRequestObjectParameter `json:"parameters,omitzero,required"`
	Path       string                                              `json:"path,required"`
	Body       ProjectSnippetRequestParamsRequestObjectBody        `json:"body,omitzero"`
	paramObj
}

func (r ProjectSnippetRequestParamsRequestObject) MarshalJSON() (data []byte, err error) {
	type shadow ProjectSnippetRequestParamsRequestObject
	return param.MarshalObject(r, (*shadow)(&r))
}
func (r *ProjectSnippetRequestParamsRequestObject) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

// The properties In, Name are required.
type ProjectSnippetRequestParamsRequestObjectParameter struct {
	// Any of "path", "query", "header", "cookie".
	In    string `json:"in,omitzero,required"`
	Name  string `json:"name,required"`
	Value any    `json:"value,omitzero"`
	paramObj
}

func (r ProjectSnippetRequestParamsRequestObjectParameter) MarshalJSON() (data []byte, err error) {
	type shadow ProjectSnippetRequestParamsRequestObjectParameter
	return param.MarshalObject(r, (*shadow)(&r))
}
func (r *ProjectSnippetRequestParamsRequestObjectParameter) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

func init() {
	apijson.RegisterFieldValidator[ProjectSnippetRequestParamsRequestObjectParameter](
		"in", "path", "query", "header", "cookie",
	)
}

type ProjectSnippetRequestParamsRequestObjectBody struct {
	FileParam param.Opt[string] `json:"fileParam,omitzero"`
	FilePath  param.Opt[string] `json:"filePath,omitzero"`
	paramObj
}

func (r ProjectSnippetRequestParamsRequestObjectBody) MarshalJSON() (data []byte, err error) {
	type shadow ProjectSnippetRequestParamsRequestObjectBody
	return param.MarshalObject(r, (*shadow)(&r))
}
func (r *ProjectSnippetRequestParamsRequestObjectBody) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

type ProjectSnippetRequestParamsVersion string

const (
	ProjectSnippetRequestParamsVersionNext           ProjectSnippetRequestParamsVersion = "next"
	ProjectSnippetRequestParamsVersionLatestReleased ProjectSnippetRequestParamsVersion = "latest_released"
)
