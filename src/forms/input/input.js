<<<<<<< HEAD
import React from 'react';
import '../../styles/inputForm.css';

const InputForm = ({handleChange, label, ...otherProps }) => {

        return (
            <>
                <div>
                    {label && (
                        <label>
                            {label}
                        </label>
                    )}

                    <input className="input" onChange={handleChange} {...otherProps} />
                </div>
            </>
        );
    
}

export default InputForm;







//! kopia przed rejestracją email

// import React from 'react';

// const InputForm = ({handleChange, label, ...otherProps }) => {

//         return (
//             <>
//                 <div>
//                     {label && (
//                         <label>
//                             {label}
//                         </label>
//                     )}

//                     <input className="input" onChange={handleChange} {...otherProps} />
//                 </div>
//             </>
//         );
    
// }

=======
import React from 'react';
import '../../styles/inputForm.css';

const InputForm = ({handleChange, label, ...otherProps }) => {

        return (
            <>
                <div>
                    {label && (
                        <label>
                            {label}
                        </label>
                    )}

                    <input className="input" onChange={handleChange} {...otherProps} />
                </div>
            </>
        );
    
}

export default InputForm;







//! kopia przed rejestracją email

// import React from 'react';

// const InputForm = ({handleChange, label, ...otherProps }) => {

//         return (
//             <>
//                 <div>
//                     {label && (
//                         <label>
//                             {label}
//                         </label>
//                     )}

//                     <input className="input" onChange={handleChange} {...otherProps} />
//                 </div>
//             </>
//         );
    
// }

>>>>>>> e60820b (beta version)
// export default InputForm;