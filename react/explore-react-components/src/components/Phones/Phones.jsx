import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Audio } from 'react-loader-spinner';

const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        //     .then(data => setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phonesData = data.data.data;
                const phonesWithFakeData = phonesData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                console.log(phonesWithFakeData);
                setPhones(phonesWithFakeData);
                setLoading(false);
            })
    }, [])

    return (
        <div>
            {loading && <div>
                <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="#8884d8"
                    ariaLabel="three-dots-loading"
                    wrapperStyle
                    wrapperClass
                />
            </div>}
            <h2 className="text-5xl">Phones: {phones.length}</h2>
            <BarChart width={1000} height={500} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey={'name'} />
                <YAxis />
                <Tooltip />
            </BarChart>
        </div>
    );
};

export default Phones;

// Browser console:
// const slug = "apple_iphone_13_mini-11104";
// undefined
// slug.split('-')
// eslint-disable-next-line no-irregular-whitespace
// (2) ['apple_iphone_13_mini', '11104']
// slug.split('-')[1]
// '11104'
// parseInt(slug.split('-')[1])
// 11104