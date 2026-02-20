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

func TestBuildNewWithOptionalParams(t *testing.T) {
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
	_, err := client.Builds.New(context.TODO(), ericstagingco5.BuildNewParams{
		Project: "project",
		Revision: ericstagingco5.BuildNewParamsRevisionUnion{
			OfString: ericstagingco5.String("string"),
		},
		AllowEmpty:            ericstagingco5.Bool(true),
		Branch:                ericstagingco5.String("branch"),
		CommitMessage:         ericstagingco5.String("commit_message"),
		EnableAICommitMessage: ericstagingco5.Bool(true),
		TargetCommitMessages: ericstagingco5.BuildNewParamsTargetCommitMessages{
			Cli:        ericstagingco5.String("cli"),
			Csharp:     ericstagingco5.String("csharp"),
			Go:         ericstagingco5.String("go"),
			Java:       ericstagingco5.String("java"),
			Kotlin:     ericstagingco5.String("kotlin"),
			Node:       ericstagingco5.String("node"),
			OpenAPI:    ericstagingco5.String("openapi"),
			Php:        ericstagingco5.String("php"),
			Python:     ericstagingco5.String("python"),
			Ruby:       ericstagingco5.String("ruby"),
			Sql:        ericstagingco5.String("sql"),
			Terraform:  ericstagingco5.String("terraform"),
			Typescript: ericstagingco5.String("typescript"),
		},
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

func TestBuildGet(t *testing.T) {
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
	_, err := client.Builds.Get(context.TODO(), "buildId")
	if err != nil {
		var apierr *ericstagingco5.Error
		if errors.As(err, &apierr) {
			t.Log(string(apierr.DumpRequest(true)))
		}
		t.Fatalf("err should be nil: %s", err.Error())
	}
}

func TestBuildListWithOptionalParams(t *testing.T) {
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
	_, err := client.Builds.List(context.TODO(), ericstagingco5.BuildListParams{
		Project: "project",
		Branch:  ericstagingco5.String("branch"),
		Cursor:  ericstagingco5.String("cursor"),
		Limit:   ericstagingco5.Float(1),
		Revision: ericstagingco5.BuildListParamsRevisionUnion{
			OfString: ericstagingco5.String("string"),
		},
	})
	if err != nil {
		var apierr *ericstagingco5.Error
		if errors.As(err, &apierr) {
			t.Log(string(apierr.DumpRequest(true)))
		}
		t.Fatalf("err should be nil: %s", err.Error())
	}
}

func TestBuildCompareWithOptionalParams(t *testing.T) {
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
	_, err := client.Builds.Compare(context.TODO(), ericstagingco5.BuildCompareParams{
		Base: ericstagingco5.BuildCompareParamsBase{
			Branch: "branch",
			Revision: ericstagingco5.BuildCompareParamsBaseRevisionUnion{
				OfString: ericstagingco5.String("string"),
			},
			CommitMessage: ericstagingco5.String("commit_message"),
		},
		Head: ericstagingco5.BuildCompareParamsHead{
			Branch: "branch",
			Revision: ericstagingco5.BuildCompareParamsHeadRevisionUnion{
				OfString: ericstagingco5.String("string"),
			},
			CommitMessage: ericstagingco5.String("commit_message"),
		},
		Project: "project",
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

func TestBuildGetDiagnosticsWithOptionalParams(t *testing.T) {
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
	_, err := client.Builds.GetDiagnostics(
		context.TODO(),
		"buildId",
		ericstagingco5.BuildGetDiagnosticsParams{
			Cursor:   ericstagingco5.String("cursor"),
			Limit:    ericstagingco5.Float(1),
			Severity: ericstagingco5.BuildGetDiagnosticsParamsSeverityFatal,
			Targets:  ericstagingco5.String("targets"),
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
