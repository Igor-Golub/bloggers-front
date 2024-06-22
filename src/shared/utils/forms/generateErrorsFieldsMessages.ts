export function generateErrorsFieldsMessages(
  type: "maxLength" | "minLength",
  data: Partial<{ amount: number; field: string }>,
) {
  const messages = {
    maxLength: `${data?.field} mast be more then ${data?.amount} characters`,
    minLength: `${data?.field} mast be less then ${data?.amount} characters`,
  };

  return messages[type];
}
