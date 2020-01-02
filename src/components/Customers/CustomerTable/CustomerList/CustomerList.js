import React from 'react';
import { Link } from 'react-router-dom';
// import show from '../../../../img/eyeicon.png';
import { auth } from '../../../Auth/Auth';
import {Button} from 'react-bootstrap';

const customerList = (props) => (
    <tr>
        <td>{props.customer.Name}</td>
        <td>{props.customer.Surname}</td>
        <td>{props.customer.Email}</td>
        <td>{props.customer.Telephone}</td>
        <td>{props.customer.CityName}</td>
        <td>{props.customer.StateName}</td>
        <td>
            {/* <Link to={"customers/" + props.customer.Id + "/bills"}> <img src={show} width="30" height="30" alt="clickable show" /></Link> */}

            <Link to={"customers/" + props.customer.Id + "/bills"} className="ml-1">
                <svg xmlns="http://www.w3.org/2000/svg" height="22" version="1.1" viewBox="0 -1 512.00001 512" width="22"><g id="surface1"><path fill="#007bff" d="M 448.703125 63.296875 C 407.890625 22.480469 353.621094 0 295.898438 0 C 238.175781 0 183.90625 22.480469 143.089844 63.296875 C 102.273438 104.113281 79.792969 158.378906 79.792969 216.105469 C 79.792969 260.191406 92.921875 302.257812 117.304688 337.863281 L 11.675781 442.945312 C 4.148438 450.476562 0 460.488281 0 471.136719 C 0 481.785156 4.148438 491.792969 11.675781 499.324219 C 19.453125 507.097656 29.664062 510.984375 39.875 510.984375 C 50.074219 510.984375 60.269531 507.105469 68.023438 499.351562 L 173.59375 394.324219 C 209.3125 418.945312 251.582031 432.207031 295.898438 432.207031 C 353.621094 432.207031 407.886719 409.730469 448.703125 368.910156 C 489.519531 328.09375 512 273.828125 512 216.105469 C 512 158.382812 489.519531 104.113281 448.703125 63.296875 Z M 46.84375 478.113281 C 42.996094 481.960938 36.734375 481.957031 32.886719 478.113281 C 31.023438 476.25 29.996094 473.769531 29.996094 471.136719 C 29.996094 468.5 31.023438 466.023438 32.859375 464.1875 L 136.046875 361.527344 C 138.328125 364.035156 140.675781 366.496094 143.085938 368.910156 C 145.34375 371.167969 147.644531 373.355469 149.984375 375.5 Z M 427.492188 347.699219 C 354.933594 420.261719 236.863281 420.261719 164.296875 347.699219 C 91.734375 275.136719 91.734375 157.070312 164.296875 84.507812 C 199.449219 49.355469 246.1875 29.996094 295.894531 29.996094 C 345.605469 29.996094 392.339844 49.355469 427.492188 84.507812 C 500.058594 157.070312 500.058594 275.136719 427.492188 347.699219 Z M 427.492188 347.699219 " /><path fill="#007bff" d="M 412.34375 99.660156 C 348.132812 35.449219 243.660156 35.453125 179.449219 99.660156 C 115.242188 163.867188 115.242188 268.339844 179.449219 332.550781 C 211.554688 364.652344 253.726562 380.707031 295.898438 380.707031 C 338.066406 380.707031 380.238281 364.652344 412.34375 332.550781 C 476.550781 268.339844 476.550781 163.867188 412.34375 99.660156 Z M 391.132812 311.339844 C 338.621094 363.851562 253.175781 363.851562 200.660156 311.339844 C 148.148438 258.824219 148.148438 173.382812 200.660156 120.871094 C 226.921875 94.609375 261.402344 81.484375 295.898438 81.484375 C 330.382812 81.484375 364.878906 94.617188 391.132812 120.871094 C 443.644531 173.382812 443.644531 258.824219 391.132812 311.339844 Z M 391.132812 311.339844 " /></g></svg>
            </Link>

            {auth.getUser() ? (<Link to={{pathname: "customers/" + props.customer.Id + "/edit", state: { Id: props.customer.Id, Name: props.customer.Name, Surname: props.customer.Surname, Email: props.customer.Email, Telephone: props.customer.Telephone, CityName: props.customer.CityName, StateName: props.customer.StateName } }} className="ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -1 401.52289 401" width="24"><path fill="#007bff" d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0" /><path fill="#007bff" d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0" /></svg>
            </Link>) : ('')}


            {auth.getUser() ? (<Button variant="link" className="ml-2" onClick={()=> props.deleteHandler(props.customer.Id)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 512 512" width="24"><path fill="#007bff" d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0" /><path fill="#007bff" d="m176.8125 351.1875c-4.097656 0-8.195312-1.554688-11.308594-4.691406-6.25-6.25-6.25-16.382813 0-22.632813l158.398438-158.402343c6.253906-6.25 16.386718-6.25 22.636718 0s6.25 16.382812 0 22.636718l-158.402343 158.398438c-3.15625 3.136718-7.25 4.691406-11.324219 4.691406zm0 0" /><path fill="#007bff" d="m335.1875 351.1875c-4.09375 0-8.191406-1.554688-11.304688-4.691406l-158.398437-158.378906c-6.253906-6.25-6.253906-16.382813 0-22.632813 6.25-6.253906 16.382813-6.253906 22.632813 0l158.398437 158.398437c6.253906 6.25 6.253906 16.382813 0 22.632813-3.132813 3.117187-7.230469 4.671875-11.328125 4.671875zm0 0" /></svg>
            </Button>) : ('')}

        </td>
    </tr>
);

export default customerList;



