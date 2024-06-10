import classNames from 'classnames';
import styles from './poipio.module.scss';

export interface PoipioProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Poipio = ({ className }: PoipioProps) => {
    return <div className={classNames(styles.root, className)}>Poipio</div>;
};
