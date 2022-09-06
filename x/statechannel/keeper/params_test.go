package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "github.com/ttdung/statechannel/testutil/keeper"
	"github.com/ttdung/statechannel/x/statechannel/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.StatechannelKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
