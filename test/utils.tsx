
import * as React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppConfig } from '../src/types/AppContext.types';
import { AppContextValue, AppContext } from '../src/context/AppContext';
import { HotelListData } from 'src/types/HotelData.types';

type CustomRenderOptions = {
    appConfig?: AppConfig;
    children?: React.ReactNode;
};

export const MOCK_APP_CONFIG: AppConfig = {
    baseUrl: "localhost",
};

export const TestWrapper: React.FC<CustomRenderOptions> = ({
    children,
    appConfig = MOCK_APP_CONFIG,
}) => {
    const queryClient = React.useMemo<QueryClient>(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        retry: false,
                    },
                },
            }),
        [],
    );

    const appContextValue = React.useMemo<AppContextValue>(
        () => ({ config: appConfig, onCancel: jest.fn(), onComplete: jest.fn() }),
        [appConfig],
    );

    return (
        <>
            <AppContext.Provider value={appContextValue}>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </AppContext.Provider>
        </>
    );
};

export const MOCK_HOTEL_LIST = [
    {
        "id": "cxd650nuyo",
        "property": {
            "propertyId": "P107801",
            "title": "Courtyard by Marriott Sydney-North Ryde",
            "address": [
                "7-11 Talavera Rd",
                "North Ryde"
            ],
            "previewImage": {
                "url": "https://unsplash.it/145/125/?random",
                "caption": "Image of Courtyard by Marriott Sydney-North Ryde",
                "imageType": "PRIMARY"
            },
            "rating": {
                "ratingValue": 4.5,
                "ratingType": "self"
            }
        },
        "offer": {
            "promotion": {
                "title": "Exclusive Deal",
                "type": "MEMBER"
            },
            "name": "Deluxe Balcony Room",
            "displayPrice": {
                "amount": 329.000000000,
                "currency": "AUD"
            },
            "savings": {
                "amount": 30.000000000,
                "currency": "AUD"
            },
            "cancellationOption": {
                "cancellationType": "NOT_REFUNDABLE"
            }
        }
    },
    {
        "id": "mesq6mggyn",
        "property": {
            "propertyId": "P107802",
            "title": "Primus Hotel Sydney",
            "address": [
                "339 Pitt St",
                "Sydney"
            ],
            "previewImage": {
                "url": "https://unsplash.it/145/125/?random",
                "caption": "Image of Primus Hotel Sydney",
                "imageType": "PRIMARY"
            },
            "rating": {
                "ratingValue": 5,
                "ratingType": "self"
            }
        },
        "offer": {
            "promotion": {
                "title": "Exclusive Deal",
                "type": "MEMBER"
            },
            "name": "Deluxe King",
            "displayPrice": {
                "amount": 375.000000000,
                "currency": "AUD"
            },
            "savings": {
                "amount": 28.000000000,
                "currency": "AUD"
            },
            "cancellationOption": {
                "cancellationType": "FREE_CANCELLATION"
            }
        }
    }] as HotelListData[];