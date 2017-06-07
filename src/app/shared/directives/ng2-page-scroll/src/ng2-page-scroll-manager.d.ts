import { PageScrollDirective } from './ng2-page-scroll.directive';

export declare class PageScrollManager 
{
    private static runningInstances;
    private static listener;
    static add(pageScroll: PageScrollDirective): void;
    static stopAll(): boolean;
    static remove(pageScroll: PageScrollDirective): boolean;
    static attachInterfereListeners(body: HTMLBodyElement): void;
    static detachInterfereListeners(body: HTMLBodyElement): void;
}
