// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

package ericstagingco5

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"net/url"
	"slices"
	"time"

	"github.com/meorphis/test-repo-9/internal/apijson"
	"github.com/meorphis/test-repo-9/internal/apiquery"
	"github.com/meorphis/test-repo-9/internal/requestconfig"
	"github.com/meorphis/test-repo-9/option"
	"github.com/meorphis/test-repo-9/packages/param"
	"github.com/meorphis/test-repo-9/packages/respjson"
)

// BuildService contains methods and other services that help with interacting with
// the eric-staging-co-5 API.
//
// Note, unlike clients, this service does not read variables from the environment
// automatically. You should not instantiate this service directly, and instead use
// the [NewBuildService] method instead.
type BuildService struct {
	Options []option.RequestOption
}

// NewBuildService generates a new service that applies the given options to each
// request. These options are applied after the parent client's options (if there
// is one), and before any request-specific options.
func NewBuildService(opts ...option.RequestOption) (r BuildService) {
	r = BuildService{}
	r.Options = opts
	return
}

// Create a build, on top of a project branch, against a given input revision.
//
// The project branch will be modified so that its latest set of config files
// points to the one specified by the input revision.
func (r *BuildService) New(ctx context.Context, body BuildNewParams, opts ...option.RequestOption) (res *Build, err error) {
	opts = slices.Concat(r.Options, opts)
	path := "v0/builds"
	err = requestconfig.ExecuteNewRequest(ctx, http.MethodPost, path, body, &res, opts...)
	return
}

// Retrieve a build by its ID.
func (r *BuildService) Get(ctx context.Context, buildID string, opts ...option.RequestOption) (res *Build, err error) {
	opts = slices.Concat(r.Options, opts)
	if buildID == "" {
		err = errors.New("missing required buildId parameter")
		return
	}
	path := fmt.Sprintf("v0/builds/%s", url.PathEscape(buildID))
	err = requestconfig.ExecuteNewRequest(ctx, http.MethodGet, path, nil, &res, opts...)
	return
}

// List user-triggered builds for a given project.
//
// An optional revision can be specified to filter by config commit SHA, or hashes
// of file contents.
func (r *BuildService) List(ctx context.Context, query BuildListParams, opts ...option.RequestOption) (res *BuildListResponse, err error) {
	opts = slices.Concat(r.Options, opts)
	path := "v0/builds"
	err = requestconfig.ExecuteNewRequest(ctx, http.MethodGet, path, query, &res, opts...)
	return
}

// Create two builds whose outputs can be directly compared with each other.
//
// Created builds _modify_ their project branches so that their latest sets of
// config files point to the ones specified by the input revision.
//
// This endpoint is useful because a build has more inputs than the set of config
// files it uses, so comparing two builds directly may return spurious differences.
// Builds made via this endpoint are guaranteed to have differences arising from
// the set of config files, and any custom code.
func (r *BuildService) Compare(ctx context.Context, body BuildCompareParams, opts ...option.RequestOption) (res *BuildCompareResponse, err error) {
	opts = slices.Concat(r.Options, opts)
	path := "v0/builds/compare"
	err = requestconfig.ExecuteNewRequest(ctx, http.MethodPost, path, body, &res, opts...)
	return
}

// Get the list of diagnostics for a given build.
//
// If no language targets are specified, diagnostics for all languages are
// returned.
func (r *BuildService) GetDiagnostics(ctx context.Context, buildID string, query BuildGetDiagnosticsParams, opts ...option.RequestOption) (res *BuildGetDiagnosticsResponse, err error) {
	opts = slices.Concat(r.Options, opts)
	if buildID == "" {
		err = errors.New("missing required buildId parameter")
		return
	}
	path := fmt.Sprintf("v0/builds/%s/diagnostics", url.PathEscape(buildID))
	err = requestconfig.ExecuteNewRequest(ctx, http.MethodGet, path, query, &res, opts...)
	return
}

type Build struct {
	// Build ID
	ID             string                   `json:"id,required"`
	ConfigCommit   string                   `json:"config_commit,required"`
	CreatedAt      time.Time                `json:"created_at,required" format:"date-time"`
	DocumentedSpec BuildDocumentedSpecUnion `json:"documented_spec,required"`
	// Any of "build".
	Object    BuildObject  `json:"object,required"`
	Org       string       `json:"org,required"`
	Project   string       `json:"project,required"`
	Targets   BuildTargets `json:"targets,required"`
	UpdatedAt time.Time    `json:"updated_at,required" format:"date-time"`
	// JSON contains metadata for fields, check presence with [respjson.Field.Valid].
	JSON struct {
		ID             respjson.Field
		ConfigCommit   respjson.Field
		CreatedAt      respjson.Field
		DocumentedSpec respjson.Field
		Object         respjson.Field
		Org            respjson.Field
		Project        respjson.Field
		Targets        respjson.Field
		UpdatedAt      respjson.Field
		ExtraFields    map[string]respjson.Field
		raw            string
	} `json:"-"`
}

// Returns the unmodified JSON received from the API
func (r Build) RawJSON() string { return r.JSON.raw }
func (r *Build) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

// BuildDocumentedSpecUnion contains all possible properties and values from
// [BuildDocumentedSpecObject], [BuildDocumentedSpecObject].
//
// Use the methods beginning with 'As' to cast the union to one of its variants.
type BuildDocumentedSpecUnion struct {
	// This field is from variant [BuildDocumentedSpecObject].
	Content string `json:"content"`
	// This field is from variant [BuildDocumentedSpecObject].
	Type string `json:"type"`
	// This field is from variant [BuildDocumentedSpecObject].
	Expires time.Time `json:"expires"`
	// This field is from variant [BuildDocumentedSpecObject].
	URL  string `json:"url"`
	JSON struct {
		Content respjson.Field
		Type    respjson.Field
		Expires respjson.Field
		URL     respjson.Field
		raw     string
	} `json:"-"`
}

func (u BuildDocumentedSpecUnion) AsBuildDocumentedSpecObject() (v BuildDocumentedSpecObject) {
	apijson.UnmarshalRoot(json.RawMessage(u.JSON.raw), &v)
	return
}

func (u BuildDocumentedSpecUnion) AsVariant2() (v BuildDocumentedSpecObject) {
	apijson.UnmarshalRoot(json.RawMessage(u.JSON.raw), &v)
	return
}

// Returns the unmodified JSON received from the API
func (u BuildDocumentedSpecUnion) RawJSON() string { return u.JSON.raw }

func (r *BuildDocumentedSpecUnion) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

type BuildDocumentedSpecObject struct {
	Content string `json:"content,required"`
	// Any of "content".
	Type string `json:"type,required"`
	// JSON contains metadata for fields, check presence with [respjson.Field.Valid].
	JSON struct {
		Content     respjson.Field
		Type        respjson.Field
		ExtraFields map[string]respjson.Field
		raw         string
	} `json:"-"`
}

// Returns the unmodified JSON received from the API
func (r BuildDocumentedSpecObject) RawJSON() string { return r.JSON.raw }
func (r *BuildDocumentedSpecObject) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

type BuildObject string

const (
	BuildObjectBuild BuildObject = "build"
)

type BuildTargets struct {
	Cli        BuildTarget `json:"cli"`
	Csharp     BuildTarget `json:"csharp"`
	Go         BuildTarget `json:"go"`
	Java       BuildTarget `json:"java"`
	Kotlin     BuildTarget `json:"kotlin"`
	Node       BuildTarget `json:"node"`
	OpenAPI    BuildTarget `json:"openapi"`
	Php        BuildTarget `json:"php"`
	Python     BuildTarget `json:"python"`
	Ruby       BuildTarget `json:"ruby"`
	Sql        BuildTarget `json:"sql"`
	Terraform  BuildTarget `json:"terraform"`
	Typescript BuildTarget `json:"typescript"`
	// JSON contains metadata for fields, check presence with [respjson.Field.Valid].
	JSON struct {
		Cli         respjson.Field
		Csharp      respjson.Field
		Go          respjson.Field
		Java        respjson.Field
		Kotlin      respjson.Field
		Node        respjson.Field
		OpenAPI     respjson.Field
		Php         respjson.Field
		Python      respjson.Field
		Ruby        respjson.Field
		Sql         respjson.Field
		Terraform   respjson.Field
		Typescript  respjson.Field
		ExtraFields map[string]respjson.Field
		raw         string
	} `json:"-"`
}

// Returns the unmodified JSON received from the API
func (r BuildTargets) RawJSON() string { return r.JSON.raw }
func (r *BuildTargets) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

type BuildTarget struct {
	Commit     BuildTargetCommitUnion `json:"commit,required"`
	InstallURL string                 `json:"install_url,required"`
	// Any of "build_target".
	Object BuildTargetObject `json:"object,required"`
	// Any of "not_started", "codegen", "postgen", "completed".
	Status BuildTargetStatus `json:"status,required"`
	Build  CheckStepUnion    `json:"build"`
	Lint   CheckStepUnion    `json:"lint"`
	Test   CheckStepUnion    `json:"test"`
	// JSON contains metadata for fields, check presence with [respjson.Field.Valid].
	JSON struct {
		Commit      respjson.Field
		InstallURL  respjson.Field
		Object      respjson.Field
		Status      respjson.Field
		Build       respjson.Field
		Lint        respjson.Field
		Test        respjson.Field
		ExtraFields map[string]respjson.Field
		raw         string
	} `json:"-"`
}

// Returns the unmodified JSON received from the API
func (r BuildTarget) RawJSON() string { return r.JSON.raw }
func (r *BuildTarget) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

// BuildTargetCommitUnion contains all possible properties and values from
// [BuildTargetCommitStatus], [BuildTargetCommitStatus], [BuildTargetCommitStatus],
// [BuildTargetCommitObject].
//
// Use the methods beginning with 'As' to cast the union to one of its variants.
type BuildTargetCommitUnion struct {
	Status string `json:"status"`
	// This field is from variant [BuildTargetCommitObject].
	Commit Commit `json:"commit"`
	// This field is from variant [BuildTargetCommitObject].
	Completed BuildTargetCommitObjectCompleted `json:"completed"`
	// This field is from variant [BuildTargetCommitObject].
	Conclusion CommitConclusion `json:"conclusion"`
	// This field is from variant [BuildTargetCommitObject].
	MergeConflictPr BuildTargetCommitObjectMergeConflictPr `json:"merge_conflict_pr"`
	JSON            struct {
		Status          respjson.Field
		Commit          respjson.Field
		Completed       respjson.Field
		Conclusion      respjson.Field
		MergeConflictPr respjson.Field
		raw             string
	} `json:"-"`
}

func (u BuildTargetCommitUnion) AsBuildTargetCommitStatus() (v BuildTargetCommitStatus) {
	apijson.UnmarshalRoot(json.RawMessage(u.JSON.raw), &v)
	return
}

func (u BuildTargetCommitUnion) AsVariant2() (v BuildTargetCommitStatus) {
	apijson.UnmarshalRoot(json.RawMessage(u.JSON.raw), &v)
	return
}

func (u BuildTargetCommitUnion) AsVariant3() (v BuildTargetCommitStatus) {
	apijson.UnmarshalRoot(json.RawMessage(u.JSON.raw), &v)
	return
}

func (u BuildTargetCommitUnion) AsBuildTargetCommitObject() (v BuildTargetCommitObject) {
	apijson.UnmarshalRoot(json.RawMessage(u.JSON.raw), &v)
	return
}

// Returns the unmodified JSON received from the API
func (u BuildTargetCommitUnion) RawJSON() string { return u.JSON.raw }

func (r *BuildTargetCommitUnion) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

type BuildTargetCommitStatus struct {
	// Any of "not_started".
	Status string `json:"status,required"`
	// JSON contains metadata for fields, check presence with [respjson.Field.Valid].
	JSON struct {
		Status      respjson.Field
		ExtraFields map[string]respjson.Field
		raw         string
	} `json:"-"`
}

// Returns the unmodified JSON received from the API
func (r BuildTargetCommitStatus) RawJSON() string { return r.JSON.raw }
func (r *BuildTargetCommitStatus) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

type BuildTargetCommitObject struct {
	Commit Commit `json:"commit,required"`
	// deprecated
	Completed BuildTargetCommitObjectCompleted `json:"completed,required"`
	// Any of "error", "warning", "note", "success", "merge_conflict",
	// "upstream_merge_conflict", "fatal", "payment_required", "cancelled",
	// "timed_out", "noop", "version_bump".
	Conclusion      CommitConclusion                       `json:"conclusion,required"`
	MergeConflictPr BuildTargetCommitObjectMergeConflictPr `json:"merge_conflict_pr,required"`
	// Any of "completed".
	Status string `json:"status,required"`
	// JSON contains metadata for fields, check presence with [respjson.Field.Valid].
	JSON struct {
		Commit          respjson.Field
		Completed       respjson.Field
		Conclusion      respjson.Field
		MergeConflictPr respjson.Field
		Status          respjson.Field
		ExtraFields     map[string]respjson.Field
		raw             string
	} `json:"-"`
}

// Returns the unmodified JSON received from the API
func (r BuildTargetCommitObject) RawJSON() string { return r.JSON.raw }
func (r *BuildTargetCommitObject) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

// deprecated
type BuildTargetCommitObjectCompleted struct {
	Commit Commit `json:"commit,required"`
	// Any of "error", "warning", "note", "success", "merge_conflict",
	// "upstream_merge_conflict", "fatal", "payment_required", "cancelled",
	// "timed_out", "noop", "version_bump".
	Conclusion      CommitConclusion                                `json:"conclusion,required"`
	MergeConflictPr BuildTargetCommitObjectCompletedMergeConflictPr `json:"merge_conflict_pr,required"`
	// JSON contains metadata for fields, check presence with [respjson.Field.Valid].
	JSON struct {
		Commit          respjson.Field
		Conclusion      respjson.Field
		MergeConflictPr respjson.Field
		ExtraFields     map[string]respjson.Field
		raw             string
	} `json:"-"`
}

// Returns the unmodified JSON received from the API
func (r BuildTargetCommitObjectCompleted) RawJSON() string { return r.JSON.raw }
func (r *BuildTargetCommitObjectCompleted) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

type BuildTargetCommitObjectCompletedMergeConflictPr struct {
	Number float64                                             `json:"number,required"`
	Repo   BuildTargetCommitObjectCompletedMergeConflictPrRepo `json:"repo,required"`
	// JSON contains metadata for fields, check presence with [respjson.Field.Valid].
	JSON struct {
		Number      respjson.Field
		Repo        respjson.Field
		ExtraFields map[string]respjson.Field
		raw         string
	} `json:"-"`
}

// Returns the unmodified JSON received from the API
func (r BuildTargetCommitObjectCompletedMergeConflictPr) RawJSON() string { return r.JSON.raw }
func (r *BuildTargetCommitObjectCompletedMergeConflictPr) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

type BuildTargetCommitObjectCompletedMergeConflictPrRepo struct {
	Name  string `json:"name,required"`
	Owner string `json:"owner,required"`
	// JSON contains metadata for fields, check presence with [respjson.Field.Valid].
	JSON struct {
		Name        respjson.Field
		Owner       respjson.Field
		ExtraFields map[string]respjson.Field
		raw         string
	} `json:"-"`
}

// Returns the unmodified JSON received from the API
func (r BuildTargetCommitObjectCompletedMergeConflictPrRepo) RawJSON() string { return r.JSON.raw }
func (r *BuildTargetCommitObjectCompletedMergeConflictPrRepo) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

type BuildTargetCommitObjectMergeConflictPr struct {
	Number float64                                    `json:"number,required"`
	Repo   BuildTargetCommitObjectMergeConflictPrRepo `json:"repo,required"`
	// JSON contains metadata for fields, check presence with [respjson.Field.Valid].
	JSON struct {
		Number      respjson.Field
		Repo        respjson.Field
		ExtraFields map[string]respjson.Field
		raw         string
	} `json:"-"`
}

// Returns the unmodified JSON received from the API
func (r BuildTargetCommitObjectMergeConflictPr) RawJSON() string { return r.JSON.raw }
func (r *BuildTargetCommitObjectMergeConflictPr) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

type BuildTargetCommitObjectMergeConflictPrRepo struct {
	Name  string `json:"name,required"`
	Owner string `json:"owner,required"`
	// JSON contains metadata for fields, check presence with [respjson.Field.Valid].
	JSON struct {
		Name        respjson.Field
		Owner       respjson.Field
		ExtraFields map[string]respjson.Field
		raw         string
	} `json:"-"`
}

// Returns the unmodified JSON received from the API
func (r BuildTargetCommitObjectMergeConflictPrRepo) RawJSON() string { return r.JSON.raw }
func (r *BuildTargetCommitObjectMergeConflictPrRepo) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

type BuildTargetObject string

const (
	BuildTargetObjectBuildTarget BuildTargetObject = "build_target"
)

type BuildTargetStatus string

const (
	BuildTargetStatusNotStarted BuildTargetStatus = "not_started"
	BuildTargetStatusCodegen    BuildTargetStatus = "codegen"
	BuildTargetStatusPostgen    BuildTargetStatus = "postgen"
	BuildTargetStatusCompleted  BuildTargetStatus = "completed"
)

type CheckConclusion string

const (
	CheckConclusionSuccess        CheckConclusion = "success"
	CheckConclusionFailure        CheckConclusion = "failure"
	CheckConclusionSkipped        CheckConclusion = "skipped"
	CheckConclusionCancelled      CheckConclusion = "cancelled"
	CheckConclusionActionRequired CheckConclusion = "action_required"
	CheckConclusionNeutral        CheckConclusion = "neutral"
	CheckConclusionTimedOut       CheckConclusion = "timed_out"
)

// CheckStepUnion contains all possible properties and values from
// [CheckStepStatus], [CheckStepStatus], [CheckStepStatus], [CheckStepObject].
//
// Use the methods beginning with 'As' to cast the union to one of its variants.
type CheckStepUnion struct {
	Status string `json:"status"`
	// This field is from variant [CheckStepObject].
	Completed CheckStepObjectCompleted `json:"completed"`
	// This field is from variant [CheckStepObject].
	Conclusion CheckConclusion `json:"conclusion"`
	// This field is from variant [CheckStepObject].
	URL  string `json:"url"`
	JSON struct {
		Status     respjson.Field
		Completed  respjson.Field
		Conclusion respjson.Field
		URL        respjson.Field
		raw        string
	} `json:"-"`
}

func (u CheckStepUnion) AsCheckStepStatus() (v CheckStepStatus) {
	apijson.UnmarshalRoot(json.RawMessage(u.JSON.raw), &v)
	return
}

func (u CheckStepUnion) AsVariant2() (v CheckStepStatus) {
	apijson.UnmarshalRoot(json.RawMessage(u.JSON.raw), &v)
	return
}

func (u CheckStepUnion) AsVariant3() (v CheckStepStatus) {
	apijson.UnmarshalRoot(json.RawMessage(u.JSON.raw), &v)
	return
}

func (u CheckStepUnion) AsCheckStepObject() (v CheckStepObject) {
	apijson.UnmarshalRoot(json.RawMessage(u.JSON.raw), &v)
	return
}

// Returns the unmodified JSON received from the API
func (u CheckStepUnion) RawJSON() string { return u.JSON.raw }

func (r *CheckStepUnion) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

type CheckStepStatus struct {
	// Any of "not_started".
	Status string `json:"status,required"`
	// JSON contains metadata for fields, check presence with [respjson.Field.Valid].
	JSON struct {
		Status      respjson.Field
		ExtraFields map[string]respjson.Field
		raw         string
	} `json:"-"`
}

// Returns the unmodified JSON received from the API
func (r CheckStepStatus) RawJSON() string { return r.JSON.raw }
func (r *CheckStepStatus) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

type CheckStepObject struct {
	// deprecated
	Completed CheckStepObjectCompleted `json:"completed,required"`
	// Any of "success", "failure", "skipped", "cancelled", "action_required",
	// "neutral", "timed_out".
	Conclusion CheckConclusion `json:"conclusion,required"`
	// Any of "completed".
	Status string `json:"status,required"`
	URL    string `json:"url,required"`
	// JSON contains metadata for fields, check presence with [respjson.Field.Valid].
	JSON struct {
		Completed   respjson.Field
		Conclusion  respjson.Field
		Status      respjson.Field
		URL         respjson.Field
		ExtraFields map[string]respjson.Field
		raw         string
	} `json:"-"`
}

// Returns the unmodified JSON received from the API
func (r CheckStepObject) RawJSON() string { return r.JSON.raw }
func (r *CheckStepObject) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

// deprecated
type CheckStepObjectCompleted struct {
	// Any of "success", "failure", "skipped", "cancelled", "action_required",
	// "neutral", "timed_out".
	Conclusion CheckConclusion `json:"conclusion,required"`
	URL        string          `json:"url,required"`
	// JSON contains metadata for fields, check presence with [respjson.Field.Valid].
	JSON struct {
		Conclusion  respjson.Field
		URL         respjson.Field
		ExtraFields map[string]respjson.Field
		raw         string
	} `json:"-"`
}

// Returns the unmodified JSON received from the API
func (r CheckStepObjectCompleted) RawJSON() string { return r.JSON.raw }
func (r *CheckStepObjectCompleted) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

type Commit struct {
	Repo CommitRepo `json:"repo,required"`
	Sha  string     `json:"sha,required"`
	// JSON contains metadata for fields, check presence with [respjson.Field.Valid].
	JSON struct {
		Repo        respjson.Field
		Sha         respjson.Field
		ExtraFields map[string]respjson.Field
		raw         string
	} `json:"-"`
}

// Returns the unmodified JSON received from the API
func (r Commit) RawJSON() string { return r.JSON.raw }
func (r *Commit) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

type CommitRepo struct {
	Branch string `json:"branch,required"`
	Name   string `json:"name,required"`
	Owner  string `json:"owner,required"`
	// JSON contains metadata for fields, check presence with [respjson.Field.Valid].
	JSON struct {
		Branch      respjson.Field
		Name        respjson.Field
		Owner       respjson.Field
		ExtraFields map[string]respjson.Field
		raw         string
	} `json:"-"`
}

// Returns the unmodified JSON received from the API
func (r CommitRepo) RawJSON() string { return r.JSON.raw }
func (r *CommitRepo) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

type CommitConclusion string

const (
	CommitConclusionError                 CommitConclusion = "error"
	CommitConclusionWarning               CommitConclusion = "warning"
	CommitConclusionNote                  CommitConclusion = "note"
	CommitConclusionSuccess               CommitConclusion = "success"
	CommitConclusionMergeConflict         CommitConclusion = "merge_conflict"
	CommitConclusionUpstreamMergeConflict CommitConclusion = "upstream_merge_conflict"
	CommitConclusionFatal                 CommitConclusion = "fatal"
	CommitConclusionPaymentRequired       CommitConclusion = "payment_required"
	CommitConclusionCancelled             CommitConclusion = "cancelled"
	CommitConclusionTimedOut              CommitConclusion = "timed_out"
	CommitConclusionNoop                  CommitConclusion = "noop"
	CommitConclusionVersionBump           CommitConclusion = "version_bump"
)

type BuildListResponse struct {
	Data       []Build `json:"data,required"`
	HasMore    bool    `json:"has_more,required"`
	NextCursor string  `json:"next_cursor"`
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
func (r BuildListResponse) RawJSON() string { return r.JSON.raw }
func (r *BuildListResponse) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

type BuildCompareResponse struct {
	Base Build `json:"base,required"`
	Head Build `json:"head,required"`
	// JSON contains metadata for fields, check presence with [respjson.Field.Valid].
	JSON struct {
		Base        respjson.Field
		Head        respjson.Field
		ExtraFields map[string]respjson.Field
		raw         string
	} `json:"-"`
}

// Returns the unmodified JSON received from the API
func (r BuildCompareResponse) RawJSON() string { return r.JSON.raw }
func (r *BuildCompareResponse) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

type BuildGetDiagnosticsResponse struct {
	Data       []BuildGetDiagnosticsResponseData `json:"data,required"`
	HasMore    bool                              `json:"has_more,required"`
	NextCursor string                            `json:"next_cursor"`
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
func (r BuildGetDiagnosticsResponse) RawJSON() string { return r.JSON.raw }
func (r *BuildGetDiagnosticsResponse) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

type BuildGetDiagnosticsResponseData struct {
	// The kind of diagnostic.
	Code string `json:"code,required"`
	// Whether the diagnostic is ignored in the Stainless config.
	Ignored bool `json:"ignored,required"`
	// The severity of the diagnostic.
	//
	// Any of "fatal", "error", "warning", "note".
	Level string `json:"level,required"`
	// A description of the diagnostic.
	Message string                                   `json:"message,required"`
	More    BuildGetDiagnosticsResponseDataMoreUnion `json:"more,required"`
	// A JSON pointer to a relevant field in the Stainless config.
	ConfigRef string `json:"config_ref"`
	// A JSON pointer to a relevant field in the OpenAPI spec.
	OasRef string `json:"oas_ref"`
	// JSON contains metadata for fields, check presence with [respjson.Field.Valid].
	JSON struct {
		Code        respjson.Field
		Ignored     respjson.Field
		Level       respjson.Field
		Message     respjson.Field
		More        respjson.Field
		ConfigRef   respjson.Field
		OasRef      respjson.Field
		ExtraFields map[string]respjson.Field
		raw         string
	} `json:"-"`
}

// Returns the unmodified JSON received from the API
func (r BuildGetDiagnosticsResponseData) RawJSON() string { return r.JSON.raw }
func (r *BuildGetDiagnosticsResponseData) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

// BuildGetDiagnosticsResponseDataMoreUnion contains all possible properties and
// values from [BuildGetDiagnosticsResponseDataMoreObject],
// [BuildGetDiagnosticsResponseDataMoreObject].
//
// Use the methods beginning with 'As' to cast the union to one of its variants.
type BuildGetDiagnosticsResponseDataMoreUnion struct {
	// This field is from variant [BuildGetDiagnosticsResponseDataMoreObject].
	Markdown string `json:"markdown"`
	// This field is from variant [BuildGetDiagnosticsResponseDataMoreObject].
	Type string `json:"type"`
	// This field is from variant [BuildGetDiagnosticsResponseDataMoreObject].
	Raw  string `json:"raw"`
	JSON struct {
		Markdown respjson.Field
		Type     respjson.Field
		Raw      respjson.Field
		raw      string
	} `json:"-"`
}

func (u BuildGetDiagnosticsResponseDataMoreUnion) AsBuildGetDiagnosticsResponseDataMoreObject() (v BuildGetDiagnosticsResponseDataMoreObject) {
	apijson.UnmarshalRoot(json.RawMessage(u.JSON.raw), &v)
	return
}

func (u BuildGetDiagnosticsResponseDataMoreUnion) AsVariant2() (v BuildGetDiagnosticsResponseDataMoreObject) {
	apijson.UnmarshalRoot(json.RawMessage(u.JSON.raw), &v)
	return
}

// Returns the unmodified JSON received from the API
func (u BuildGetDiagnosticsResponseDataMoreUnion) RawJSON() string { return u.JSON.raw }

func (r *BuildGetDiagnosticsResponseDataMoreUnion) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

type BuildGetDiagnosticsResponseDataMoreObject struct {
	Markdown string `json:"markdown,required"`
	// Any of "markdown".
	Type string `json:"type,required"`
	// JSON contains metadata for fields, check presence with [respjson.Field.Valid].
	JSON struct {
		Markdown    respjson.Field
		Type        respjson.Field
		ExtraFields map[string]respjson.Field
		raw         string
	} `json:"-"`
}

// Returns the unmodified JSON received from the API
func (r BuildGetDiagnosticsResponseDataMoreObject) RawJSON() string { return r.JSON.raw }
func (r *BuildGetDiagnosticsResponseDataMoreObject) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

type BuildNewParams struct {
	// Project name
	Project string `json:"project,required"`
	// Specifies what to build: a branch name, commit SHA, merge command
	// ("base..head"), or file contents.
	Revision BuildNewParamsRevisionUnion `json:"revision,omitzero,required"`
	// Whether to allow empty commits (no changes). Defaults to false.
	AllowEmpty param.Opt[bool] `json:"allow_empty,omitzero"`
	// The project branch to use for the build. If not specified, the branch is
	// inferred from the `revision`, and will 400 when that is not possible.
	Branch param.Opt[string] `json:"branch,omitzero"`
	// Optional commit message to use when creating a new commit.
	CommitMessage param.Opt[string] `json:"commit_message,omitzero"`
	// Whether to generate AI-powered commit messages for the build. Cannot be combined
	// with `commit_message` or `target_commit_messages`.
	EnableAICommitMessage param.Opt[bool] `json:"enable_ai_commit_message,omitzero"`
	// Optional commit messages to use for each SDK when making a new commit. SDKs not
	// represented in this object will fallback to the optional `commit_message`
	// parameter, or will fallback further to the default commit message.
	TargetCommitMessages BuildNewParamsTargetCommitMessages `json:"target_commit_messages,omitzero"`
	// Optional list of SDK targets to build. If not specified, all configured targets
	// will be built.
	Targets []Target `json:"targets,omitzero"`
	paramObj
}

func (r BuildNewParams) MarshalJSON() (data []byte, err error) {
	type shadow BuildNewParams
	return param.MarshalObject(r, (*shadow)(&r))
}
func (r *BuildNewParams) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

// Only one field can be non-zero.
//
// Use [param.IsOmitted] to confirm if a field is set.
type BuildNewParamsRevisionUnion struct {
	OfString                  param.Opt[string]                             `json:",omitzero,inline"`
	OfBuildNewsRevisionMapMap map[string]BuildNewParamsRevisionMapItemUnion `json:",omitzero,inline"`
	paramUnion
}

func (u BuildNewParamsRevisionUnion) MarshalJSON() ([]byte, error) {
	return param.MarshalUnion(u, u.OfString, u.OfBuildNewsRevisionMapMap)
}
func (u *BuildNewParamsRevisionUnion) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, u)
}

// Only one field can be non-zero.
//
// Use [param.IsOmitted] to confirm if a field is set.
type BuildNewParamsRevisionMapItemUnion struct {
	OfBuildNewsRevisionMapItemContent *BuildNewParamsRevisionMapItemContent `json:",omitzero,inline"`
	OfBuildNewsRevisionMapItemURL     *BuildNewParamsRevisionMapItemURL     `json:",omitzero,inline"`
	paramUnion
}

func (u BuildNewParamsRevisionMapItemUnion) MarshalJSON() ([]byte, error) {
	return param.MarshalUnion(u, u.OfBuildNewsRevisionMapItemContent, u.OfBuildNewsRevisionMapItemURL)
}
func (u *BuildNewParamsRevisionMapItemUnion) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, u)
}

// The property Content is required.
type BuildNewParamsRevisionMapItemContent struct {
	// File content
	Content string `json:"content,required"`
	paramObj
}

func (r BuildNewParamsRevisionMapItemContent) MarshalJSON() (data []byte, err error) {
	type shadow BuildNewParamsRevisionMapItemContent
	return param.MarshalObject(r, (*shadow)(&r))
}
func (r *BuildNewParamsRevisionMapItemContent) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

// The property URL is required.
type BuildNewParamsRevisionMapItemURL struct {
	// URL to fetch file content from
	URL string `json:"url,required"`
	paramObj
}

func (r BuildNewParamsRevisionMapItemURL) MarshalJSON() (data []byte, err error) {
	type shadow BuildNewParamsRevisionMapItemURL
	return param.MarshalObject(r, (*shadow)(&r))
}
func (r *BuildNewParamsRevisionMapItemURL) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

// Optional commit messages to use for each SDK when making a new commit. SDKs not
// represented in this object will fallback to the optional `commit_message`
// parameter, or will fallback further to the default commit message.
type BuildNewParamsTargetCommitMessages struct {
	Cli        param.Opt[string] `json:"cli,omitzero"`
	Csharp     param.Opt[string] `json:"csharp,omitzero"`
	Go         param.Opt[string] `json:"go,omitzero"`
	Java       param.Opt[string] `json:"java,omitzero"`
	Kotlin     param.Opt[string] `json:"kotlin,omitzero"`
	Node       param.Opt[string] `json:"node,omitzero"`
	OpenAPI    param.Opt[string] `json:"openapi,omitzero"`
	Php        param.Opt[string] `json:"php,omitzero"`
	Python     param.Opt[string] `json:"python,omitzero"`
	Ruby       param.Opt[string] `json:"ruby,omitzero"`
	Sql        param.Opt[string] `json:"sql,omitzero"`
	Terraform  param.Opt[string] `json:"terraform,omitzero"`
	Typescript param.Opt[string] `json:"typescript,omitzero"`
	paramObj
}

func (r BuildNewParamsTargetCommitMessages) MarshalJSON() (data []byte, err error) {
	type shadow BuildNewParamsTargetCommitMessages
	return param.MarshalObject(r, (*shadow)(&r))
}
func (r *BuildNewParamsTargetCommitMessages) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

type BuildListParams struct {
	// Project name
	Project string `query:"project,required" json:"-"`
	// Branch name
	Branch param.Opt[string] `query:"branch,omitzero" json:"-"`
	// Pagination cursor from a previous response.
	Cursor param.Opt[string] `query:"cursor,omitzero" json:"-"`
	// Maximum number of builds to return, defaults to 10 (maximum: 100).
	Limit param.Opt[float64] `query:"limit,omitzero" json:"-"`
	// A config commit SHA used for the build
	Revision BuildListParamsRevisionUnion `query:"revision,omitzero" json:"-"`
	paramObj
}

// URLQuery serializes [BuildListParams]'s query parameters as `url.Values`.
func (r BuildListParams) URLQuery() (v url.Values, err error) {
	return apiquery.MarshalWithSettings(r, apiquery.QuerySettings{
		ArrayFormat:  apiquery.ArrayQueryFormatComma,
		NestedFormat: apiquery.NestedQueryFormatBrackets,
	})
}

// Only one field can be non-zero.
//
// Use [param.IsOmitted] to confirm if a field is set.
type BuildListParamsRevisionUnion struct {
	OfString                   param.Opt[string]                         `query:",omitzero,inline"`
	OfBuildListsRevisionMapMap map[string]BuildListParamsRevisionMapItem `query:",omitzero,inline"`
	paramUnion
}

// The property Hash is required.
type BuildListParamsRevisionMapItem struct {
	// File content hash
	Hash string `query:"hash,required" json:"-"`
	paramObj
}

// URLQuery serializes [BuildListParamsRevisionMapItem]'s query parameters as
// `url.Values`.
func (r BuildListParamsRevisionMapItem) URLQuery() (v url.Values, err error) {
	return apiquery.MarshalWithSettings(r, apiquery.QuerySettings{
		ArrayFormat:  apiquery.ArrayQueryFormatComma,
		NestedFormat: apiquery.NestedQueryFormatBrackets,
	})
}

type BuildCompareParams struct {
	// Parameters for the base build
	Base BuildCompareParamsBase `json:"base,omitzero,required"`
	// Parameters for the head build
	Head BuildCompareParamsHead `json:"head,omitzero,required"`
	// Project name
	Project string `json:"project,required"`
	// Optional list of SDK targets to build. If not specified, all configured targets
	// will be built.
	Targets []Target `json:"targets,omitzero"`
	paramObj
}

func (r BuildCompareParams) MarshalJSON() (data []byte, err error) {
	type shadow BuildCompareParams
	return param.MarshalObject(r, (*shadow)(&r))
}
func (r *BuildCompareParams) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

// Parameters for the base build
//
// The properties Branch, Revision are required.
type BuildCompareParamsBase struct {
	// Branch to use. When using a branch name as revision, this must match or be
	// omitted.
	Branch string `json:"branch,required"`
	// Specifies what to build: a branch name, a commit SHA, or file contents.
	Revision BuildCompareParamsBaseRevisionUnion `json:"revision,omitzero,required"`
	// Optional commit message to use when creating a new commit.
	CommitMessage param.Opt[string] `json:"commit_message,omitzero"`
	paramObj
}

func (r BuildCompareParamsBase) MarshalJSON() (data []byte, err error) {
	type shadow BuildCompareParamsBase
	return param.MarshalObject(r, (*shadow)(&r))
}
func (r *BuildCompareParamsBase) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

// Only one field can be non-zero.
//
// Use [param.IsOmitted] to confirm if a field is set.
type BuildCompareParamsBaseRevisionUnion struct {
	OfString                          param.Opt[string]                                     `json:",omitzero,inline"`
	OfBuildComparesBaseRevisionMapMap map[string]BuildCompareParamsBaseRevisionMapItemUnion `json:",omitzero,inline"`
	paramUnion
}

func (u BuildCompareParamsBaseRevisionUnion) MarshalJSON() ([]byte, error) {
	return param.MarshalUnion(u, u.OfString, u.OfBuildComparesBaseRevisionMapMap)
}
func (u *BuildCompareParamsBaseRevisionUnion) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, u)
}

// Only one field can be non-zero.
//
// Use [param.IsOmitted] to confirm if a field is set.
type BuildCompareParamsBaseRevisionMapItemUnion struct {
	OfBuildComparesBaseRevisionMapItemContent *BuildCompareParamsBaseRevisionMapItemContent `json:",omitzero,inline"`
	OfBuildComparesBaseRevisionMapItemURL     *BuildCompareParamsBaseRevisionMapItemURL     `json:",omitzero,inline"`
	paramUnion
}

func (u BuildCompareParamsBaseRevisionMapItemUnion) MarshalJSON() ([]byte, error) {
	return param.MarshalUnion(u, u.OfBuildComparesBaseRevisionMapItemContent, u.OfBuildComparesBaseRevisionMapItemURL)
}
func (u *BuildCompareParamsBaseRevisionMapItemUnion) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, u)
}

// The property Content is required.
type BuildCompareParamsBaseRevisionMapItemContent struct {
	// File content
	Content string `json:"content,required"`
	paramObj
}

func (r BuildCompareParamsBaseRevisionMapItemContent) MarshalJSON() (data []byte, err error) {
	type shadow BuildCompareParamsBaseRevisionMapItemContent
	return param.MarshalObject(r, (*shadow)(&r))
}
func (r *BuildCompareParamsBaseRevisionMapItemContent) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

// The property URL is required.
type BuildCompareParamsBaseRevisionMapItemURL struct {
	// URL to fetch file content from
	URL string `json:"url,required"`
	paramObj
}

func (r BuildCompareParamsBaseRevisionMapItemURL) MarshalJSON() (data []byte, err error) {
	type shadow BuildCompareParamsBaseRevisionMapItemURL
	return param.MarshalObject(r, (*shadow)(&r))
}
func (r *BuildCompareParamsBaseRevisionMapItemURL) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

// Parameters for the head build
//
// The properties Branch, Revision are required.
type BuildCompareParamsHead struct {
	// Branch to use. When using a branch name as revision, this must match or be
	// omitted.
	Branch string `json:"branch,required"`
	// Specifies what to build: a branch name, a commit SHA, or file contents.
	Revision BuildCompareParamsHeadRevisionUnion `json:"revision,omitzero,required"`
	// Optional commit message to use when creating a new commit.
	CommitMessage param.Opt[string] `json:"commit_message,omitzero"`
	paramObj
}

func (r BuildCompareParamsHead) MarshalJSON() (data []byte, err error) {
	type shadow BuildCompareParamsHead
	return param.MarshalObject(r, (*shadow)(&r))
}
func (r *BuildCompareParamsHead) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

// Only one field can be non-zero.
//
// Use [param.IsOmitted] to confirm if a field is set.
type BuildCompareParamsHeadRevisionUnion struct {
	OfString                          param.Opt[string]                                     `json:",omitzero,inline"`
	OfBuildComparesHeadRevisionMapMap map[string]BuildCompareParamsHeadRevisionMapItemUnion `json:",omitzero,inline"`
	paramUnion
}

func (u BuildCompareParamsHeadRevisionUnion) MarshalJSON() ([]byte, error) {
	return param.MarshalUnion(u, u.OfString, u.OfBuildComparesHeadRevisionMapMap)
}
func (u *BuildCompareParamsHeadRevisionUnion) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, u)
}

// Only one field can be non-zero.
//
// Use [param.IsOmitted] to confirm if a field is set.
type BuildCompareParamsHeadRevisionMapItemUnion struct {
	OfBuildComparesHeadRevisionMapItemContent *BuildCompareParamsHeadRevisionMapItemContent `json:",omitzero,inline"`
	OfBuildComparesHeadRevisionMapItemURL     *BuildCompareParamsHeadRevisionMapItemURL     `json:",omitzero,inline"`
	paramUnion
}

func (u BuildCompareParamsHeadRevisionMapItemUnion) MarshalJSON() ([]byte, error) {
	return param.MarshalUnion(u, u.OfBuildComparesHeadRevisionMapItemContent, u.OfBuildComparesHeadRevisionMapItemURL)
}
func (u *BuildCompareParamsHeadRevisionMapItemUnion) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, u)
}

// The property Content is required.
type BuildCompareParamsHeadRevisionMapItemContent struct {
	// File content
	Content string `json:"content,required"`
	paramObj
}

func (r BuildCompareParamsHeadRevisionMapItemContent) MarshalJSON() (data []byte, err error) {
	type shadow BuildCompareParamsHeadRevisionMapItemContent
	return param.MarshalObject(r, (*shadow)(&r))
}
func (r *BuildCompareParamsHeadRevisionMapItemContent) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

// The property URL is required.
type BuildCompareParamsHeadRevisionMapItemURL struct {
	// URL to fetch file content from
	URL string `json:"url,required"`
	paramObj
}

func (r BuildCompareParamsHeadRevisionMapItemURL) MarshalJSON() (data []byte, err error) {
	type shadow BuildCompareParamsHeadRevisionMapItemURL
	return param.MarshalObject(r, (*shadow)(&r))
}
func (r *BuildCompareParamsHeadRevisionMapItemURL) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

type BuildGetDiagnosticsParams struct {
	// Pagination cursor from a previous response
	Cursor param.Opt[string] `query:"cursor,omitzero" json:"-"`
	// Maximum number of diagnostics to return, defaults to 100 (maximum: 100)
	Limit param.Opt[float64] `query:"limit,omitzero" json:"-"`
	// Optional comma-delimited list of language targets to filter diagnostics by
	Targets param.Opt[string] `query:"targets,omitzero" json:"-"`
	// Includes the given severity and above (fatal > error > warning > note).
	//
	// Any of "fatal", "error", "warning", "note".
	Severity BuildGetDiagnosticsParamsSeverity `query:"severity,omitzero" json:"-"`
	paramObj
}

// URLQuery serializes [BuildGetDiagnosticsParams]'s query parameters as
// `url.Values`.
func (r BuildGetDiagnosticsParams) URLQuery() (v url.Values, err error) {
	return apiquery.MarshalWithSettings(r, apiquery.QuerySettings{
		ArrayFormat:  apiquery.ArrayQueryFormatComma,
		NestedFormat: apiquery.NestedQueryFormatBrackets,
	})
}

// Includes the given severity and above (fatal > error > warning > note).
type BuildGetDiagnosticsParamsSeverity string

const (
	BuildGetDiagnosticsParamsSeverityFatal   BuildGetDiagnosticsParamsSeverity = "fatal"
	BuildGetDiagnosticsParamsSeverityError   BuildGetDiagnosticsParamsSeverity = "error"
	BuildGetDiagnosticsParamsSeverityWarning BuildGetDiagnosticsParamsSeverity = "warning"
	BuildGetDiagnosticsParamsSeverityNote    BuildGetDiagnosticsParamsSeverity = "note"
)
