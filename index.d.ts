export module hotjar {
  /**
   * Initialize Hotjar tracking.
   * @param hjid This is the ID which tells Hotjar which site settings it should load and where it should save the data collected.
   * @param hjsv The version of the Tracking Code you are using. This is only needed if Hotjar ever updates the Tracking Code and needs to discontinue older ones. Knowing which version your site includes allows hotjar team to contact you and inform you accordingly.
   */
  export function initialize(hjid: number, hjsv: number): void;

  /**
   * Identify user
   * @param userId Unique ID of a user
   * @param properties Additional properties describing your user
   */
  export function identify(
    userId: string,
    properties: Record<string, any>
  ): void;

  /**
   * Add one or more events to the current session
   * @param events Event(s) to add to the session
   */
  export function event(
    events: string | string[]
  ): void;

  /**
   * Update the state of the SPA
   * @param relativePath Current page URL (such as `product/red-trainer`)
   */
  export function stateChange(
    relativePath: string,
  ): void;
}
