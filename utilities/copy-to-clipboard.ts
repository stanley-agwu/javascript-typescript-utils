import toastSuccess from 'toast-success';

export const copyText = (text: string) => {
  const input = document.createElement('input');
  input.setAttribute('value', text);
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
  toastSuccess('success', 'Copied successfully');
}
