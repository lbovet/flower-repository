import { CapturingTypeWithInfoScan } from './enumeration'

export interface ProductCodeCaptures {
    /**
     * The barcode's value of the additional service aka. PRZL
     * @maxLength 5
     */
    productCode: string
    /**
     * The input method used to capture the value
     */
    capturingType: CapturingTypeWithInfoScan
}
