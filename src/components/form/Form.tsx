import { ChangeEvent, FormEvent, useState } from "react"
import { countries } from "../../data/countries"
import styles from './Form.module.css'
import { SearchType } from "../../types"
import AlertError from "../alertError/AlertError"

type FormProps = {
    fetchWeather: () =>void
}

const Form = ({fetchWeather} : FormProps) => {

    const [search,setSearch] = useState<SearchType>({
        city: '',
        country: ''
    })
    const [alertError, setAlertError] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>)=>{
        /* Se pueden actualizar con la misma función ya que ambos son string entonces es simple */
    
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(Object.values(search).includes('')) {
            setAlertError('Todos los campos son obligatorios')
            return
        }

        fetchWeather()
    }

    return (
        <form 
            className={styles.form}
            onSubmit={handleSubmit} 
        >
            {alertError && <AlertError>{alertError}</AlertError>}
            <div className={styles.field}>
                <label htmlFor="city">Ciudad:</label>
                <input 
                    id="city"
                    type="text"
                    name="city"
                    placeholder="Ciudad"
                    value={search.city}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.field}>
                <label htmlFor="country">País:</label>
                <select
                    id="country"
                    name="country"
                    value={search.country}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione un País --</option>
                    {countries.map(country => (
                        <option 
                            key={country.code}
                            value={country.code}
                        >
                            {country.name}
                        </option>
                    ))}
                </select>
            </div>

            <input 
                type="submit" 
                value='Consultar Clima'
                className={styles.submit} 
            />
        </form>
    )
}

export default Form