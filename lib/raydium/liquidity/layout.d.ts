import * as _solana_web3_js from '@solana/web3.js';
import { Structure } from '../../marshmallow/index.js';
import * as BN from 'bn.js';
import { GetStructureSchema } from '../../marshmallow/buffer-layout.js';

declare const fixedSwapInLayout: Structure<number | BN, "", {
    instruction: number;
    amountIn: BN;
    minAmountOut: BN;
}>;
declare const fixedSwapOutLayout: Structure<number | BN, "", {
    instruction: number;
    maxAmountIn: BN;
    amountOut: BN;
}>;
declare const createPoolV4Layout: Structure<number, "", {
    nonce: number;
    instruction: number;
}>;
declare const initPoolLayout: Structure<number | BN, "", {
    nonce: number;
    instruction: number;
    startTime: BN;
}>;
declare const liquidityStateV4Layout: Structure<_solana_web3_js.PublicKey | BN | BN[], "", {
    status: BN;
    nonce: BN;
    owner: _solana_web3_js.PublicKey;
    state: BN;
    lpMint: _solana_web3_js.PublicKey;
    lpVault: _solana_web3_js.PublicKey;
    padding: BN[];
    baseMint: _solana_web3_js.PublicKey;
    quoteMint: _solana_web3_js.PublicKey;
    openOrders: _solana_web3_js.PublicKey;
    targetOrders: _solana_web3_js.PublicKey;
    baseVault: _solana_web3_js.PublicKey;
    quoteVault: _solana_web3_js.PublicKey;
    withdrawQueue: _solana_web3_js.PublicKey;
    marketProgramId: _solana_web3_js.PublicKey;
    marketId: _solana_web3_js.PublicKey;
    maxOrder: BN;
    depth: BN;
    baseDecimal: BN;
    quoteDecimal: BN;
    resetFlag: BN;
    minSize: BN;
    volMaxCutRatio: BN;
    amountWaveRatio: BN;
    baseLotSize: BN;
    quoteLotSize: BN;
    minPriceMultiplier: BN;
    maxPriceMultiplier: BN;
    systemDecimalValue: BN;
    minSeparateNumerator: BN;
    minSeparateDenominator: BN;
    tradeFeeNumerator: BN;
    tradeFeeDenominator: BN;
    pnlNumerator: BN;
    pnlDenominator: BN;
    swapFeeNumerator: BN;
    swapFeeDenominator: BN;
    baseNeedTakePnl: BN;
    quoteNeedTakePnl: BN;
    quoteTotalPnl: BN;
    baseTotalPnl: BN;
    quoteTotalDeposited: BN;
    baseTotalDeposited: BN;
    swapBaseInAmount: BN;
    swapQuoteOutAmount: BN;
    swapBase2QuoteFee: BN;
    swapQuoteInAmount: BN;
    swapBaseOutAmount: BN;
    swapQuote2BaseFee: BN;
    lpReserve: BN;
}>;
declare type LiquidityStateLayoutV4 = typeof liquidityStateV4Layout;
declare type LiquidityStateV4 = GetStructureSchema<LiquidityStateLayoutV4>;
declare const liquidityStateV5Layout: Structure<_solana_web3_js.PublicKey | BN | BN[], "", {
    status: BN;
    nonce: BN;
    owner: _solana_web3_js.PublicKey;
    state: BN;
    lpMint: _solana_web3_js.PublicKey;
    padding: BN[];
    baseMint: _solana_web3_js.PublicKey;
    quoteMint: _solana_web3_js.PublicKey;
    openOrders: _solana_web3_js.PublicKey;
    targetOrders: _solana_web3_js.PublicKey;
    baseVault: _solana_web3_js.PublicKey;
    quoteVault: _solana_web3_js.PublicKey;
    marketProgramId: _solana_web3_js.PublicKey;
    marketId: _solana_web3_js.PublicKey;
    maxOrder: BN;
    depth: BN;
    baseDecimal: BN;
    quoteDecimal: BN;
    resetFlag: BN;
    minSize: BN;
    volMaxCutRatio: BN;
    amountWaveRatio: BN;
    baseLotSize: BN;
    quoteLotSize: BN;
    minPriceMultiplier: BN;
    maxPriceMultiplier: BN;
    minSeparateNumerator: BN;
    minSeparateDenominator: BN;
    tradeFeeNumerator: BN;
    tradeFeeDenominator: BN;
    pnlNumerator: BN;
    pnlDenominator: BN;
    swapFeeNumerator: BN;
    swapFeeDenominator: BN;
    baseNeedTakePnl: BN;
    quoteNeedTakePnl: BN;
    quoteTotalPnl: BN;
    baseTotalPnl: BN;
    swapBaseInAmount: BN;
    swapQuoteOutAmount: BN;
    swapBase2QuoteFee: BN;
    swapQuoteInAmount: BN;
    swapBaseOutAmount: BN;
    swapQuote2BaseFee: BN;
    accountType: BN;
    systemDecimalsValue: BN;
    abortTradeFactor: BN;
    priceTickMultiplier: BN;
    priceTick: BN;
    poolOpenTime: BN;
    punishPcAmount: BN;
    punishCoinAmount: BN;
    orderbookToInitTime: BN;
    modelDataAccount: _solana_web3_js.PublicKey;
}>;
declare const addLiquidityLayout: Structure<number | BN, "", {
    instruction: number;
    baseAmountIn: BN;
    quoteAmountIn: BN;
    fixedSide: BN;
}>;
declare const removeLiquidityLayout: Structure<number | BN, "", {
    instruction: number;
    amountIn: BN;
}>;
declare type LiquidityStateLayoutV5 = typeof liquidityStateV5Layout;
declare type LiquidityStateV5 = GetStructureSchema<LiquidityStateLayoutV5>;
declare type LiquidityState = LiquidityStateV4 | LiquidityStateV5;
declare type LiquidityStateLayout = LiquidityStateLayoutV4 | LiquidityStateLayoutV5;
declare const LIQUIDITY_VERSION_TO_STATE_LAYOUT: {
    [version: number]: LiquidityStateLayout;
};

export { LIQUIDITY_VERSION_TO_STATE_LAYOUT, LiquidityState, LiquidityStateLayout, LiquidityStateLayoutV4, LiquidityStateLayoutV5, LiquidityStateV4, LiquidityStateV5, addLiquidityLayout, createPoolV4Layout, fixedSwapInLayout, fixedSwapOutLayout, initPoolLayout, liquidityStateV4Layout, liquidityStateV5Layout, removeLiquidityLayout };