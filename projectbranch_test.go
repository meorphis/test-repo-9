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

func TestProjectBranchNewWithOptionalParams(t *testing.T) {
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
	_, err := client.Projects.Branches.New(
		context.TODO(),
		"project",
		ericstagingco5.ProjectBranchNewParams{
			Branch:     "branch",
			BranchFrom: "branch_from",
			Force:      ericstagingco5.Bool(true),
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

func TestProjectBranchGet(t *testing.T) {
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
	_, err := client.Projects.Branches.Get(
		context.TODO(),
		"branch",
		ericstagingco5.ProjectBranchGetParams{
			Project: "project",
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

func TestProjectBranchListWithOptionalParams(t *testing.T) {
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
	_, err := client.Projects.Branches.List(
		context.TODO(),
		"project",
		ericstagingco5.ProjectBranchListParams{
			Cursor: ericstagingco5.String("cursor"),
			Limit:  ericstagingco5.Float(1),
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

func TestProjectBranchDelete(t *testing.T) {
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
	_, err := client.Projects.Branches.Delete(
		context.TODO(),
		"branch",
		ericstagingco5.ProjectBranchDeleteParams{
			Project: "project",
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

func TestProjectBranchRebaseWithOptionalParams(t *testing.T) {
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
	_, err := client.Projects.Branches.Rebase(
		context.TODO(),
		"branch",
		ericstagingco5.ProjectBranchRebaseParams{
			Project: "project",
			Base:    ericstagingco5.String("base"),
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

func TestProjectBranchResetWithOptionalParams(t *testing.T) {
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
	_, err := client.Projects.Branches.Reset(
		context.TODO(),
		"branch",
		ericstagingco5.ProjectBranchResetParams{
			Project:         "project",
			TargetConfigSha: ericstagingco5.String("target_config_sha"),
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
