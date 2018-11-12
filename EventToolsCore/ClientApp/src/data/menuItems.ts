export interface IMenuItem {
    id: string;
    displayName: string;
    description: string;
    subMenuItems?: Array<IMenuItem>;

    canExecute?;
    isVisible?;

    execute?;
};

export interface ILinkMenuItem extends IMenuItem {
    link: string;
};