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

func TestProjectNew(t *testing.T) {
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
	_, err := client.Projects.New(context.TODO(), ericstagingco5.ProjectNewParams{
		DisplayName: "display_name",
		Org:         "org",
		Revision: map[string]ericstagingco5.ProjectNewParamsRevisionUnion{
			"foo": {
				OfProjectNewsRevisionContent: &ericstagingco5.ProjectNewParamsRevisionContent{
					Content: "content",
				},
			},
		},
		Slug:    "slug",
		Targets: []ericstagingco5.Target{ericstagingco5.TargetNode},
	})
	if err != nil {
		var apierr *ericstagingco5.Error
		if errors.As(err, &apierr) {
			t.Log(string(apierr.DumpRequest(true)))
		}
		t.Fatalf("err should be nil: %s", err.Error())
	}
}

func TestProjectGet(t *testing.T) {
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
	_, err := client.Projects.Get(context.TODO(), "project")
	if err != nil {
		var apierr *ericstagingco5.Error
		if errors.As(err, &apierr) {
			t.Log(string(apierr.DumpRequest(true)))
		}
		t.Fatalf("err should be nil: %s", err.Error())
	}
}

func TestProjectUpdateWithOptionalParams(t *testing.T) {
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
	_, err := client.Projects.Update(
		context.TODO(),
		"project",
		ericstagingco5.ProjectUpdateParams{
			DisplayName: ericstagingco5.String("display_name"),
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

func TestProjectListWithOptionalParams(t *testing.T) {
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
	_, err := client.Projects.List(context.TODO(), ericstagingco5.ProjectListParams{
		Cursor: ericstagingco5.String("cursor"),
		Limit:  ericstagingco5.Float(1),
		Org:    ericstagingco5.String("org"),
	})
	if err != nil {
		var apierr *ericstagingco5.Error
		if errors.As(err, &apierr) {
			t.Log(string(apierr.DumpRequest(true)))
		}
		t.Fatalf("err should be nil: %s", err.Error())
	}
}

func TestProjectGenerateCommitMessage(t *testing.T) {
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
	_, err := client.Projects.GenerateCommitMessage(
		context.TODO(),
		"project",
		ericstagingco5.ProjectGenerateCommitMessageParams{
			Target:  ericstagingco5.ProjectGenerateCommitMessageParamsTargetPython,
			BaseRef: "base_ref",
			HeadRef: "head_ref",
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
