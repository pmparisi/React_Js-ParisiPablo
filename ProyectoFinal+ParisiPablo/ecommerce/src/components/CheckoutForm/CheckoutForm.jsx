import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleNameChange = (event) => {
        const { value } = event.target;
        if (/^[A-Za-z\s]+$/.test(value) || value === '') {
            setName(value);
        }
    };

    const handlePhoneChange = (event) => {
        const { value } = event.target;
        if (/^[0-9]+$/.test(value) || value === '') {
            setPhone(value);
        }
    };

    const handleConfirm = (event) => {
        event.preventDefault();
        const userData = {
            name,
            phone,
            email
        };
        onConfirm(userData);
    };

    return (
        <>
            <div className="Container">
                <form onSubmit={handleConfirm} className="Form" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '5px', padding: '5px'}}>
                    <label className="Label" style={{display: 'flex', flexDirection: 'column', margin: '5px', padding: '5px'}}>
                        <p style={{fontSize: 'small'}}>Nombre</p>
                        <input
                            className="Input"
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            style={{border: '2px Solid black', borderRadius: '50px', padding: '5px', width: '300px'}}
                        />
                    </label>
                    <label className="Label" style={{display: 'flex', flexDirection: 'column', margin: '5px', padding: '5px'}}>
                        <p style={{fontSize: 'small'}}>Telefono</p>
                        <input
                            className="Input"
                            type="text"
                            value={phone}
                            onChange={handlePhoneChange}
                            style={{border: '2px Solid black', borderRadius: '50px', padding: '5px', width: '300px'}}
                        />
                    </label>
                    <label className="Label" style={{display: 'flex', flexDirection: 'column', margin: '5px', padding: '5px'}}>
                        <p style={{fontSize: 'small'}}>Email</p>
                        <input
                            className="Input"
                            type="email"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                            style={{border: '2px Solid black', borderRadius: '50px', padding: '5px', width: '300px'}}
                        />
                    </label>
                    <div className="Label">
                        <button type="submit" className="Button" style={{display: 'flex', justifyContent: 'center', width: '150px', height: '40px', padding: '5px', margin: '10px', background: 'linear-gradient(to right, rgb(115, 226, 161) 0%, rgb(3, 175, 150) 100%)'}}>
                            Crear Orden
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CheckoutForm;