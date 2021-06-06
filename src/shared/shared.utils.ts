import * as AWS from "aws-sdk";
import { PhotoFile } from "../types";

AWS.config.update({
  credentials: {
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
  },
});

export const uploadToS3 = async (
  file: PhotoFile,
  userId: number,
  folderName: string
): Promise<string> => {
  const { filename, createReadStream } = await file;
  const readStream = createReadStream();
  const name = `${folderName}/${userId}_${Date.now()}_${filename}`;
  const { Location } = await new AWS.S3()
    .upload({
      Bucket: "ggyaastargram",
      Key: name,
      ACL: "public-read",
      Body: readStream,
    })
    .promise();
  return Location;
};

export const deleteFromS3 = async (fileUrl: string, folderName: string) => {
  const filename = fileUrl.split(`/${folderName}/`)[1];
  const ok = await new AWS.S3()
    .deleteObject({
      Bucket: `ggyaastargram/${folderName}`,
      Key: filename,
    })
    .promise();
};
