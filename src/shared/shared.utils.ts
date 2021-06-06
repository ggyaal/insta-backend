import * as AWS from "aws-sdk";
import { PhotoFile } from "../types";

AWS.config.update({
  credentials: {
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
  },
});

export const uploadPhoto = async (
  file: PhotoFile,
  userId: number
): Promise<string> => {
  console.log(typeof file, file);
  const { filename, createReadStream } = await file;
  const readStream = createReadStream();
  const name = `${userId}_${Date.now()}_${filename}`;
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
