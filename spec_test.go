// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

package ericstagingco5_test

import (
	"context"
	"errors"
	"os"
	"testing"

	"github.com/stainless-sdks-staging/eric-staging-co-5-go"
	"github.com/stainless-sdks-staging/eric-staging-co-5-go/internal/testutil"
	"github.com/stainless-sdks-staging/eric-staging-co-5-go/option"
)

func TestSpecGetDecoratedSpec(t *testing.T) {
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
	_, err := client.Spec.GetDecoratedSpec(
		context.TODO(),
		"projectName",
		ericstagingco5.SpecGetDecoratedSpecParams{
			ClientID: "clientId",
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
