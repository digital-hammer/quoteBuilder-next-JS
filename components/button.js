import cx from 'classnames'
import local from 'styles/components/button.module.scss'

const Button = (props) => {
    const {
        onClick,
        link=false,
        simple=false,
        type,
        children,
        className="",
    } = props

    const clicked = (e) => {
        link ? window.open(link, '_self') : onClick(e);
    }
    return (
        <button 
            type={type} 
            onClick={(e)=> clicked(e)} 
            className={cx(...className, local.btn, {[local.btn_basic]: simple})} 
        >{children}</button>
    )
}

export default Button;