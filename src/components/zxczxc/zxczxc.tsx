import classNames from 'classnames';
import styles from './zxczxc.module.scss';

export interface ZxczxcProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Zxczxc = ({ className }: ZxczxcProps) => {
    return <div className={classNames(styles.root, className)}>Zxczxc</div>;
};
