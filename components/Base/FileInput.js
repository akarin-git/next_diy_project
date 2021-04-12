import styles from "../../styles/Input.module.scss";


export default function FileInput({value,type,placeholder,onChange}) {
    const handleChange = (e) => {
    if (e.target.files[0]) {
      setImagePath(e.target.files[0]);
    }
  };

    return (
            <input 
                // name={name}
                className={styles.input}
                type={type}
                placeholder={placeholder}
                onChange={handleChange}
            />
    );
}
