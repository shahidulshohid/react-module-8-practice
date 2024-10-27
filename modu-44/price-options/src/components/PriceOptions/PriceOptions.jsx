
import PriceOption from '../PriceOption/PriceOpton'

const PriceOptions = () => {
  const PriceOptions = [
          {
            "id": 1,
            "name": "Basic",
            "price": 30,
            "features": [
              "Access to gym equipment",
              "Locker room access",
              "1 free fitness assessment per year"
            ]
          },
          {
            "id": 2,
            "name": "Standard",
            "price": 50,
            "features": [
              "Access to gym equipment",
              "Locker room access",
              "5 group classes per month",
              "Access to sauna",
              "2 free fitness assessments per year"
            ]
          },
          {
            "id": 3,
            "name": "Premium",
            "price": 80,
            "features": [
              "24/7 access to gym equipment",
              "Locker room access",
              "Unlimited group classes",
              "Access to sauna and steam room",
              "5 free fitness assessments per year",
              "10% discount on personal training sessions"
            ]
          }
        ]
      
    return (
        <div className='mr-12'>
            <h1 className="5xl">Best Prices in the town</h1>
            <div className='grid md:grid-cols-3 gap-6'>
            {
                PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;