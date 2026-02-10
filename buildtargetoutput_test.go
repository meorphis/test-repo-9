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

func TestBuildTargetOutputGetWithOptionalParams(t *testing.T) {
	t.Skip("Prism tests are disabled")
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
	_, err := client.BuildTargetOutputs.Get(context.TODO(), ericstagingco5.BuildTargetOutputGetParams{
		BuildID: "build_id",
		Target:  ericstagingco5.BuildTargetOutputGetParamsTargetNode,
		Type:    ericstagingco5.BuildTargetOutputGetParamsTypeSource,
		Output:  ericstagingco5.BuildTargetOutputGetParamsOutputURL,
	})
	if err != nil {
		var apierr *ericstagingco5.Error
		if errors.As(err, &apierr) {
			t.Log(string(apierr.DumpRequest(true)))
		}
		t.Fatalf("err should be nil: %s", err.Error())
	}
}
