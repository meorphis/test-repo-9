# OpenAPI

Response Types:

- <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#OpenAPIGetResponse">OpenAPIGetResponse</a>

Methods:

- <code title="get /v0/openapi">client.OpenAPI.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#OpenAPIService.Get">Get</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>) (\*<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#OpenAPIGetResponse">OpenAPIGetResponse</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>

# Orgs

Response Types:

- <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#Org">Org</a>
- <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#OrgListResponse">OrgListResponse</a>

Methods:

- <code title="get /v0/orgs/{org}">client.Orgs.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#OrgService.Get">Get</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, org <a href="https://pkg.go.dev/builtin#string">string</a>) (\*<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#Org">Org</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="get /v0/orgs">client.Orgs.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#OrgService.List">List</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>) (\*<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#OrgListResponse">OrgListResponse</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>

# Projects

Response Types:

- <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#Project">Project</a>
- <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectListResponse">ProjectListResponse</a>
- <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectGenerateCommitMessageResponse">ProjectGenerateCommitMessageResponse</a>

Methods:

- <code title="post /v0/projects">client.Projects.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectService.New">New</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, body <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectNewParams">ProjectNewParams</a>) (\*<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#Project">Project</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="get /v0/projects/{project}">client.Projects.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectService.Get">Get</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, project <a href="https://pkg.go.dev/builtin#string">string</a>) (\*<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#Project">Project</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="patch /v0/projects/{project}">client.Projects.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectService.Update">Update</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, project <a href="https://pkg.go.dev/builtin#string">string</a>, body <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectUpdateParams">ProjectUpdateParams</a>) (\*<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#Project">Project</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="get /v0/projects">client.Projects.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectService.List">List</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, query <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectListParams">ProjectListParams</a>) (\*<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectListResponse">ProjectListResponse</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="post /v0/projects/{project}/generate_commit_message">client.Projects.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectService.GenerateCommitMessage">GenerateCommitMessage</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, project <a href="https://pkg.go.dev/builtin#string">string</a>, params <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectGenerateCommitMessageParams">ProjectGenerateCommitMessageParams</a>) (\*<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectGenerateCommitMessageResponse">ProjectGenerateCommitMessageResponse</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>

## Branches

Response Types:

- <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectBranch">ProjectBranch</a>
- <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectBranchListResponse">ProjectBranchListResponse</a>
- <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectBranchDeleteResponse">ProjectBranchDeleteResponse</a>

Methods:

- <code title="post /v0/projects/{project}/branches">client.Projects.Branches.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectBranchService.New">New</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, project <a href="https://pkg.go.dev/builtin#string">string</a>, body <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectBranchNewParams">ProjectBranchNewParams</a>) (\*<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectBranch">ProjectBranch</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="get /v0/projects/{project}/branches/{branch}">client.Projects.Branches.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectBranchService.Get">Get</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, branch <a href="https://pkg.go.dev/builtin#string">string</a>, query <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectBranchGetParams">ProjectBranchGetParams</a>) (\*<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectBranch">ProjectBranch</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="get /v0/projects/{project}/branches">client.Projects.Branches.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectBranchService.List">List</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, project <a href="https://pkg.go.dev/builtin#string">string</a>, query <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectBranchListParams">ProjectBranchListParams</a>) (\*<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectBranchListResponse">ProjectBranchListResponse</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="delete /v0/projects/{project}/branches/{branch}">client.Projects.Branches.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectBranchService.Delete">Delete</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, branch <a href="https://pkg.go.dev/builtin#string">string</a>, body <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectBranchDeleteParams">ProjectBranchDeleteParams</a>) (\*<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectBranchDeleteResponse">ProjectBranchDeleteResponse</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="put /v0/projects/{project}/branches/{branch}/rebase">client.Projects.Branches.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectBranchService.Rebase">Rebase</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, branch <a href="https://pkg.go.dev/builtin#string">string</a>, params <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectBranchRebaseParams">ProjectBranchRebaseParams</a>) (\*<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectBranch">ProjectBranch</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="put /v0/projects/{project}/branches/{branch}/reset">client.Projects.Branches.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectBranchService.Reset">Reset</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, branch <a href="https://pkg.go.dev/builtin#string">string</a>, params <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectBranchResetParams">ProjectBranchResetParams</a>) (\*<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectBranch">ProjectBranch</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>

## Configs

Response Types:

- <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectConfigGetResponse">ProjectConfigGetResponse</a>
- <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectConfigGuessResponse">ProjectConfigGuessResponse</a>

Methods:

- <code title="get /v0/projects/{project}/configs">client.Projects.Configs.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectConfigService.Get">Get</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, project <a href="https://pkg.go.dev/builtin#string">string</a>, query <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectConfigGetParams">ProjectConfigGetParams</a>) (\*<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectConfigGetResponse">ProjectConfigGetResponse</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="post /v0/projects/{project}/configs/guess">client.Projects.Configs.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectConfigService.Guess">Guess</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, project <a href="https://pkg.go.dev/builtin#string">string</a>, body <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectConfigGuessParams">ProjectConfigGuessParams</a>) (\*<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectConfigGuessResponse">ProjectConfigGuessResponse</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>

## Snippets

Params Types:

- <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#Target">Target</a>

Response Types:

- <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#Target">Target</a>
- <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectSnippetRequestResponse">ProjectSnippetRequestResponse</a>

Methods:

- <code title="post /v0/projects/{projectName}/snippets/request">client.Projects.Snippets.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectSnippetService.Request">Request</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, projectName <a href="https://pkg.go.dev/builtin#string">string</a>, body <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectSnippetRequestParams">ProjectSnippetRequestParams</a>) (\*<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#ProjectSnippetRequestResponse">ProjectSnippetRequestResponse</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>

# Builds

Response Types:

- <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#Build">Build</a>
- <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#BuildTarget">BuildTarget</a>
- <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#CheckConclusion">CheckConclusion</a>
- <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#CheckStepUnion">CheckStepUnion</a>
- <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#Commit">Commit</a>
- <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#CommitConclusion">CommitConclusion</a>
- <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#BuildListResponse">BuildListResponse</a>
- <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#BuildCompareResponse">BuildCompareResponse</a>
- <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#BuildGetDiagnosticsResponse">BuildGetDiagnosticsResponse</a>

Methods:

- <code title="post /v0/builds">client.Builds.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#BuildService.New">New</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, body <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#BuildNewParams">BuildNewParams</a>) (\*<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#Build">Build</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="get /v0/builds/{buildId}">client.Builds.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#BuildService.Get">Get</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, buildID <a href="https://pkg.go.dev/builtin#string">string</a>) (\*<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#Build">Build</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="get /v0/builds">client.Builds.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#BuildService.List">List</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, query <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#BuildListParams">BuildListParams</a>) (\*<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#BuildListResponse">BuildListResponse</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="post /v0/builds/compare">client.Builds.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#BuildService.Compare">Compare</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, body <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#BuildCompareParams">BuildCompareParams</a>) (\*<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#BuildCompareResponse">BuildCompareResponse</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
- <code title="get /v0/builds/{buildId}/diagnostics">client.Builds.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#BuildService.GetDiagnostics">GetDiagnostics</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, buildID <a href="https://pkg.go.dev/builtin#string">string</a>, query <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#BuildGetDiagnosticsParams">BuildGetDiagnosticsParams</a>) (\*<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#BuildGetDiagnosticsResponse">BuildGetDiagnosticsResponse</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>

# BuildTargetOutputs

Response Types:

- <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#BuildTargetOutputGetResponseUnion">BuildTargetOutputGetResponseUnion</a>

Methods:

- <code title="get /v0/build_target_outputs">client.BuildTargetOutputs.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#BuildTargetOutputService.Get">Get</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, query <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#BuildTargetOutputGetParams">BuildTargetOutputGetParams</a>) (\*<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#BuildTargetOutputGetResponseUnion">BuildTargetOutputGetResponseUnion</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>

# Spec

Response Types:

- <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#SpecGetDecoratedSpecResponse">SpecGetDecoratedSpecResponse</a>

Methods:

- <code title="get /v0/spec/application/{clientId}/{projectName}">client.Spec.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#SpecService.GetDecoratedSpec">GetDecoratedSpec</a>(ctx <a href="https://pkg.go.dev/context">context</a>.<a href="https://pkg.go.dev/context#Context">Context</a>, projectName <a href="https://pkg.go.dev/builtin#string">string</a>, query <a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#SpecGetDecoratedSpecParams">SpecGetDecoratedSpecParams</a>) (\*<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9">ericstagingco5</a>.<a href="https://pkg.go.dev/github.com/meorphis/test-repo-9#SpecGetDecoratedSpecResponse">SpecGetDecoratedSpecResponse</a>, <a href="https://pkg.go.dev/builtin#error">error</a>)</code>
