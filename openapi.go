// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

package ericstagingco5

import (
	"context"
	"net/http"
	"slices"

	"github.com/stainless-sdks-staging/eric-staging-co-5-go/internal/requestconfig"
	"github.com/stainless-sdks-staging/eric-staging-co-5-go/option"
)

// OpenAPIService contains methods and other services that help with interacting
// with the eric-staging-co-5 API.
//
// Note, unlike clients, this service does not read variables from the environment
// automatically. You should not instantiate this service directly, and instead use
// the [NewOpenAPIService] method instead.
type OpenAPIService struct {
	Options []option.RequestOption
}

// NewOpenAPIService generates a new service that applies the given options to each
// request. These options are applied after the parent client's options (if there
// is one), and before any request-specific options.
func NewOpenAPIService(opts ...option.RequestOption) (r OpenAPIService) {
	r = OpenAPIService{}
	r.Options = opts
	return
}

func (r *OpenAPIService) Get(ctx context.Context, opts ...option.RequestOption) (res *OpenAPIGetResponse, err error) {
	opts = slices.Concat(r.Options, opts)
	path := "v0/openapi"
	err = requestconfig.ExecuteNewRequest(ctx, http.MethodGet, path, nil, &res, opts...)
	return
}

type OpenAPIGetResponse = any
