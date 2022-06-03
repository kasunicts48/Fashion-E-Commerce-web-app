import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect';
import MobileFilterLayout from './FilterLayout/MobileFilterLayout';
import ProductFilter from './FilterLayout/ProductFilter';

export default function FilterLayout() {
    return (
        <div>
            <MobileView>
                <MobileFilterLayout>
                    <ProductFilter />
                </MobileFilterLayout>
            </MobileView>
            <BrowserView>
            <ProductFilter />
            
            </BrowserView>
        </div>
    )
}
