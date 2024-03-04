export default function GenerateMeta(title?: string, description?: string) {
  const siteName = "池田大輝のウェブサイト";
  const defaultDescription = "これはすごいウェブサイトです！";
  return [
    { title: title ? title + " | " + siteName : siteName },
    { description: description ?? defaultDescription }
  ];
};