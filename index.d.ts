export module hotjar {
  /**
   * Implement Hotjar into your react application.
   * @param hjid This is the ID which tells Hotjar which site settings it should load and where it should save the data collected.
   * @param hjsv The version of the Tracking Code you are using. This is only needed if Hotjar ever updates the Tracking Code and needs to discontinue older ones. Knowing which version your site includes allows hotjar team to contact you and inform you accordingly.
   */
  export function initialize(hjid: number, hjsv: number): void;
}