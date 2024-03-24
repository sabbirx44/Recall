import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to gym facilities during off-peak hours",
                "Limited access to group fitness classes",
                "No access to personal trainers",
                "Discounts on gym merchandise",
                "Monthly fitness assessment"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 49.99,
            "features": [
                "Access to gym facilities at all times",
                "Access to all group fitness classes",
                "Limited access to personal trainers",
                "Discounts on gym merchandise",
                "Quarterly fitness assessment"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 79.99,
            "features": [
                "Access to gym facilities at all times",
                "Unlimited access to all group fitness classes",
                "Priority access to personal trainers",
                "Complimentary towel service",
                "Access to sauna and steam room",
                "Discounts on gym merchandise",
                "Bi-monthly fitness assessment",
                "Nutritional counseling session"
            ]
        }
    ]

    return (
        <div className="m-12">
            <h2 className=" text-center text-4xl md:text-7xl mb-6">Best prices in the town!</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option} />)
                }
            </div>
        </div>
    );
};

export default PriceOptions;