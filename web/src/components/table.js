import { useState } from "react";

export const MappedTable = (props) => {
    const [items, setItems] = useState([
        {
            text: "This is a test",
            price: 200
        },
        {
            text: "This is also a test",
            price: 300
        },
        {
            text: "Guess what this is...",
            price: 100
        }
    ]);

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col' colSpan={2}>Quests!</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.text}</td>
                            <td><b>Φ</b>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
