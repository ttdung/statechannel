package keeper

import (
	"github.com/ttdung/statechannel/x/statechannel/types"
)

var _ types.QueryServer = Keeper{}
