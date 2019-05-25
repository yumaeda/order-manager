/**
 * Interface for wine
 */
export interface IWine {
    apply: string
    availability: string
    barcode_number: string
    capacity: number
    catch_copy: string
    cepage: string
    combined_name: string
    combined_name_jpn: string
    comment: string
    country: string
    district: string
    district_jpn: string
    etc: string
    glass_price: number
    importer: string
    member_price: number
    original_comment: string
    point: string
    price: number
    producer: string
    producer_jpn: string
    region: string
    region_jpn: string
    restaurant_price: number
    stock: number
    type: string
    village: string
    village_jpn: string
    vintage: string
}
