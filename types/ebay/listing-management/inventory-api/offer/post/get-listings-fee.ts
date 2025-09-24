import type { Amount, EbayMarketplaceId } from "@/types/ebay/global/types";
import type { ErrorDetailV3 } from "../../inventory-api-global-types";

/**
 * getListingFees
 *
 * Retrieves the expected listing fees for up to 250 unpublished offers.
 *
 * - Input: array of unpublished offer IDs
 * - Output: fee summaries grouped by marketplace (not per-offer)
 * - Errors if any of the offerIds are already published
 *
 * Endpoint:
 * POST https://api.ebay.com/sell/inventory/v1/offer/get_listing_fees
 */
export type GetListingFeesRequest = {
  offers: {
    offerId: string;
  }[];
};

// Response
export type GetListingFeesResponse = {
  feeSummaries: FeeSummary[];
};

export type FeeSummary = {
  fees: Fee[];
  marketplaceId: EbayMarketplaceId;
  warnings?: ErrorDetailV3[];
};

export type Fee = {
  amount: Amount;
  feeType: string;
  promotionalDiscount?: Amount;
};
