// To downlaod file as .xlsx

// response passed as paramter should be blobable (a blob)
export const downloadDocAsXlsx = async (response: Response) => {
  const timestamp = new Date().toISOString();
  const res = await response.blob();
  const file = window.URL.createObjectURL(res);
  const link: HTMLAnchorElement = document.createElement('a');

  link.href = file;
  link.download = `any_file_name${timestamp}.xlsx`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
