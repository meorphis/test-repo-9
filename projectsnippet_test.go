// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

package ericstagingco5_test

import (
	"context"
	"errors"
	"os"
	"testing"

	"github.com/meorphis/test-repo-9"
	"github.com/meorphis/test-repo-9/internal/testutil"
	"github.com/meorphis/test-repo-9/option"
)

func TestProjectSnippetRequestWithOptionalParams(t *testing.T) {
	t.Skip("Mock server tests are disabled")
	baseURL := "http://localhost:4010"
	if envURL, ok := os.LookupEnv("TEST_API_BASE_URL"); ok {
		baseURL = envURL
	}
	if !testutil.CheckTestServer(t, baseURL) {
		return
	}
	client := ericstagingco5.NewClient(
		option.WithBaseURL(baseURL),
		option.WithAPIKey("My API Key"),
	)
	_, err := client.Projects.Snippets.Request(
		context.TODO(),
		"projectName",
		ericstagingco5.ProjectSnippetRequestParams{
			Language: ericstagingco5.TargetNode,
			Request: ericstagingco5.ProjectSnippetRequestParamsRequestUnion{
				OfProjectSnippetRequestsRequestObject: &ericstagingco5.ProjectSnippetRequestParamsRequestObject{
					Method: "method",
					Parameters: []ericstagingco5.ProjectSnippetRequestParamsRequestObjectParameter{{
						In:    "path",
						Name:  "name",
						Value: map[string]any{},
					}},
					Path: "path",
					Body: ericstagingco5.ProjectSnippetRequestParamsRequestObjectBody{
						FileParam: ericstagingco5.String("fileParam"),
						FilePath:  ericstagingco5.String("filePath"),
					},
				},
			},
			Version: ericstagingco5.ProjectSnippetRequestParamsVersionNext,
		},
	)
	if err != nil {
		var apierr *ericstagingco5.Error
		if errors.As(err, &apierr) {
			t.Log(string(apierr.DumpRequest(true)))
		}
		t.Fatalf("err should be nil: %s", err.Error())
	}
}
