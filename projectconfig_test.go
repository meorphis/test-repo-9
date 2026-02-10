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

func TestProjectConfigGetWithOptionalParams(t *testing.T) {
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
	_, err := client.Projects.Configs.Get(
		context.TODO(),
		"project",
		ericstagingco5.ProjectConfigGetParams{
			Branch:  ericstagingco5.String("branch"),
			Include: ericstagingco5.String("include"),
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

func TestProjectConfigGuessWithOptionalParams(t *testing.T) {
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
	_, err := client.Projects.Configs.Guess(
		context.TODO(),
		"project",
		ericstagingco5.ProjectConfigGuessParams{
			Spec:   "spec",
			Branch: ericstagingco5.String("branch"),
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
