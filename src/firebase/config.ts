import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import {
  initializeFirestore,
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';

const firebaseConfig = {};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
// Firestore 초기화 시 옵션 설정
export const db = initializeFirestore(
  app,
  {
    host: 'asia-northeast3-firestore.googleapis.com', // 리전에 맞는 호스트 설정
    ssl: true, // HTTPS 연결 활성화
  },
  'img-data',
);

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png'];

async function uploadImageFromUrl(imageUrl: string, description: string) {
  /// https://image.pollinations.ai/prompt/cute%20cat

  try {
    if (!imageUrl || !description) {
      throw new Error('이미지 URL과 설명을 입력해주세요.');
    }

    // 1. 이미지 URL의 데이터를 가져오기
    const response = await fetch(imageUrl);
    console.log('response', response);

    if (!response.ok) {
      throw new Error('이미지를 가져올 수 없습니다.');
    }

    // 2. Blob 데이터 가져오기
    const imageBlob = await response.blob();

    // 3. 파일 크기와 MIME 타입 검증
    const fileSize = imageBlob.size; // Blob의 크기 (바이트 단위)
    const fileType = imageBlob.type; // Blob의 MIME 타입

    if (fileSize > MAX_FILE_SIZE) {
      throw new Error('파일 크기가 너무 큽니다.');
    }

    if (!ALLOWED_MIME_TYPES.includes(fileType)) {
      throw new Error('허용되지 않은 파일 형식입니다.');
    }

    // 4. Firebase Storage에 업로드
    const fileName = `images/${Date.now()}-${Math.random().toString(36).substring(2)}`;
    const storageRef = ref(storage, fileName);
    await uploadBytes(storageRef, imageBlob, { contentType: fileType });

    // 업로드된 파일 URL 가져오기
    const downloadUrl = await getDownloadURL(storageRef);
    //console.log();

    // 파이어베이스에서 저장된 우리만의 url

    // 5. Firestore에 데이터 저장
    const imageDoc = {
      description,
      url: downloadUrl,
      createdAt: serverTimestamp(),
    };
    await addDoc(collection(db, 'images'), imageDoc);

    console.log('이미지가 성공적으로 저장되었습니다.');
  } catch (error) {
    console.error('이미지 업로드 실패:', (error as Error).message);
  }
}

export { uploadImageFromUrl };
