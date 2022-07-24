
export type HotelListData = {
    id: string;
  
    property: {
      propertyId: string;
      title: string;
      address: string[];
      previewImage: {
        url: string;
        caption: string;
        imageType: string;
      };
      rating: {
        ratingValue: number;
        ratingType: RatingType;
      }
    };
    offer: {
      promotion: {
        title: string;
        type: string;
      };
      name: string;
      displayPrice: {
        amount: number;
        currency: string;
      };
      savings: {
        amount: number;
        currency: string;
      };
      cancellationOption: {
        cancellationType: HotelCancellationType;
      }
    }
  };
  

  export enum HotelCancellationType {
    FREE_CANCELLATION="FREE_CANCELLATION",
    NOT_REFUNDABLE="NOT_REFUNDABLE"
  }

  export enum RatingType {
    SELF="self",
    STAR="star"
  }