import React, { type FC } from 'react';
// 有条件地将类名连接在一起
import classNames from 'classnames';
import './index.less';

const Button: FC<{ className: string,type: string, children: any }> = (props) => {
    const { className, type, children }  = props;
    const cls = classNames({
        className,
        'aor-btn': true,
        [`aor-btn-${type}`]: type,
    })
    return <button type="button" className={cls}>{children}</button>
}
export default Button;
