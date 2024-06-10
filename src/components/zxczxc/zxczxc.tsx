import classNames from 'classnames';
import styles from './zxczxc.module.scss';

export interface ZxczxcProps {
    className?: string;
    txt?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Zxczxc = ({ className, txt }: ZxczxcProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h2>{txt}</h2>
            <div>
                <span>tess&#123;&#125;ssxt</span>
            </div>
            <div>Zxczxc</div>
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
                className={styles.imgmg}
            />
        </div>
    );
};
