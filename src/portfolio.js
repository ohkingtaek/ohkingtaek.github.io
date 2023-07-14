const header = {
  homepage: 'https://ohkingtaek.github.io/',
  title: 'OhKingTaek',
}

const about = {
  name: 'Wang-Taek Oh(오왕택)',
  role: 'Deep Learning Enginner',
  description:
    "Hello, I'm undergraduate researcher in Sahmyook University. \nI'm interested in computer vision fields, including Image Restoration, Multi Modal Learning, and application of AI to medicine. \nI hope my AI technology will soon have a great strength in the world.",
  CV: 'https://docs.google.com/document/d/1-iZd9iQa5n-YG5HDDBT6QmNIyrnlgUGLl66bKXpdJZ4/edit',
  social: {
    linkedin: 'https://www.linkedin.com/in/ohkingtaek/',
    github: 'https://github.com/ohkingtaek',
  },
}

const papers = [
  {
    name: 'CAIR : Multi-Scale Color Attention Network for Instagram Filter Removal',
    description:
      'Image Restoration Model인 \nNafNet에 Color Attention Module을 추가하고 경량화한 인스타그램 필터 제거 \n모델 CAIR 개발',
    detail_description: '세계 최고권위 컴퓨터 비전 학회 중 하나인 ECCV에 논문 게재\n필터링된 이미지를 원본으로 되돌리면 다양한 컴퓨터 비전 작업에 유용하고 정확도 상승\n 필터를 제거하기 위해 이미지 복구 SOTA 모델인 NAFNet을 사용하고 이미지의 색상 정보를 추출하는\n Color Attention Module을 추가하여 정확하고 빠르며 가벼운 CAIR을 제안\n 실험 결과 CAIR은 IFFI Dataset에서 기존 필터 제거 모델보다 PSNR 기준 3.69dB 높았고 약 11배 더 빠르며 2.4배 더 가벼움',
    date_of_publish: '2023-02-16',
    my_role:'CycleISP 논문을 참고하여 Color Attention Module을 사용하는 것을 제안하고 구현\n모델 훈련 및 논문 작성을 담당',
    keywords: ['Image Restoration', 'Filter Removal', 'Color Attention', 'Ensemble Learning', 'Light-Weight', '2022ECCVW'],
    sourceCode: 'https://github.com/hnvlab-syu/CAIR',
    livePreview: 'https://arxiv.org/pdf/2208.14039.pdf',
  },
  {
    name: '\nAIM 2022 challenge on instagram filter removal: Methods and results',
    description:
      '인스타그램 필터 제거 챌린지 레포트',
    detail_description: 'AIM 2022 Instagram Filter Removal Challenge에 CAIR 제안\n모델 구성, 학습 전략, 메커니즘에 대한 소개를 각 팀들이 만들어 합쳐 놓은 레포트',
    date_of_publish: '2022-10-17',
    my_role:'CycleISP 논문을 참고하여 Color Attention Module을 사용하는 것을 제안하고 구현',
    keywords: ['Filter Removal', 'Image Restoration', 'Image-to-Image Translation'],
    sourceCode: 'https://github.com/hnvlab-syu/CAIR',
    livePreview: 'https://arxiv.org/pdf/2210.08997.pdf',
  },
  {
    name: '\nNTIRE 2023 image shadow removal challenge report',
    description:
      '\n 이미지 그림자 제거 챌린지 레포트',
      detail_description: 'NTIRE 2023 Image Shadow Removal Challenge에 CLAN 제안\n모델 구성, 학습 전략, 메커니즘에 대한 소개를 각 팀들이 만들어 합쳐 놓은 레포트\n기존에 개발한 CAIR을 사용하고 LAB채널 공간을 활용한 Luminance Attention Module을 구성한 후\n Color Attention Moudule과 융합하여 Feature Fusion한 CLAN을 사용하여 높은 성능을 도출\n대회 4등',
    date_of_publish: '2023-06-12',
    my_role:'색 공간을 변형하고 활용하는 실험 주도\nLuminance 색 채널에 집중하여 모듈 개발\nFeature Fusion 코드 구현',
    keywords: ['Shadow Removal', 'Image Restoration', 'Image-to-Image Translation'],
    sourceCode: 'https://github.com/hnvlab-syu/CLAN',
    livePreview: 'https://openaccess.thecvf.com/content/CVPR2023W/NTIRE/papers/Vasluianu_NTIRE_2023_Image_Shadow_Removal_Challenge_Report_CVPRW_2023_paper.pdf',
  },
]

const projects = [
  {
    name: '\n\n건설현장의 위험요소 감지를 위한 딥러닝 기반 실시간 영상분석 시스템 개발',
    description:
      '\n작업자가 안전보호구를 착용했는지 Yolact, 후처리 알고리즘을 사용해 확인하고 모니터링 시스템을 개발하는 것',
    detail_description: '',
    project_duration: '2022.03.01 ~ 2023.02.28',
    my_role:'딥러닝 모형 학습 및 추론 실험 & 모델 성능 향상',
    stack: ['Yolact', 'Real-Time', 'Construction Safety'],
  },
  {
    name: '\n스마트 홈 카메라를 이용한 인공지능기반 영유아\n이상 징후 및 정상 운동발달 모니터링 연구',
    description:
      '인공지능 기반 영유아 이상 징후 데이터셋 \n구축(Azure Kinect 카메라와 자체 제작 \n뷰어 사용) 및 PyQt 사용하여 GUI 개발',
    detail_description: '',
    project_duration: '2022.06.01 ~ 2024.02.29',
    my_role:'데이터셋 구축 & GUI 개발 & 딥러닝 모델 개발',
    stack: ['Azure Kinect', 'PyQt'],
    sourceCode: 'https://github.com/patrashu/pykinect-recorder',
  },
  {
    name: '산학연계 SW 캡스톤 디자인 프로젝트\n인공지능 기반 방문자 관리 시스템',
    description:
      '실제 매장 CCTV 영상을 활용하여 객체인식, 객체추적, 나이와 성별 예측 통해 시간별 방문자수, 연령대, 성별 시각화하여 마케팅 활용',
    detail_description: '',
    project_duration: '2023.03.02 ~ 2023.06.21',
    my_role:'딥러닝 모델 학습 및 추론',
    stack: ['Object Detection', 'Object Tracking', 'Face Detection', 'EfficientNet', 'BoT-SORT', 'YOLOv8', 'PyTorch', 'PyTorch-Lightning', 'PyQt'],
    sourceCode: 'https://github.com/patrashu/cnai',
    livePreview: '',
  },
  {
    name: 'AI 양재 허브 인공지능 오픈소스 경진대회',
    description:
      '이미지 초해상화 모델인 SwinIR과 HAT-L을 통해 품질이 저하된 저해상도 촬영 이미지를 4배 높여 고품질로 만드는 작업',
    detail_description: '',
    project_duration: '',
    my_role:'',
    stack: ['Super Resolution', 'SwinIR', 'HAT-L', 'Self-Ensemble', 'PyTorch'],
    sourceCode: 'https://github.com/ohkingtaek/Dacon_Super_Resolution',
    livePreview: 'https://dacon.io/competitions/official/235977/codeshare/6900?page=1&dtype=recent',
  },
  {
    name: '딥러닝 및 실습 프로젝트 \n딥러닝 기반 의상 교체 시스템',
    description:
      '컴퓨터 비전 딥러닝 기술을 활용하여 사용자가 입어보고 싶은 의상을 가상으로 피팅해주는 시스템',
    detail_description: '',
    project_duration: '',
    my_role:'',
    stack: ['Virtual Try-On', 'Semantic Segmentation', 'Pose Estimation', 'Human Parsing', 'ACGPN', 'TPS', 'SwinIR', 'PyTorch', 'PyQt'],
    sourceCode: 'https://github.com/patrashu/clothes_matching',
    livePreview: '',
  },
  {
    name: '컴퓨터 비전 프로젝트 \n딥러닝 기반 포토샵 프로그램',
    description:
      '포토샵에 있는 기능인 이미지 기본 기능부터 딥러닝을 활용한 기술까지 활용하여 GUI 내에서 내 사진을 넣고 다양한 기능을 사용해볼 수 있는 프로그램',
    detail_description: '',
    project_duration: '',
    my_role:'',
    stack: ['API', 'Computer Vision', 'EfficientNet', 'YOLO', 'PyQt'],
    sourceCode: 'https://github.com/ohkingtaek/Pyside_Photoshop',
    livePreview: '',
  },
]

const awards = [
  {
    name: 'DNA+ 드론챌린지 지정공모I 실시간 드론 서비스 챌린지 \n 한국무인이동체연구조합 포럼상',
    description:
      '드론을 직접 비행하며 딥러닝 추론하기 : 드론 4K 카메라 이미지와 좌표 실시간 수신하여 YOLOv7과 DeepLabV3+를 사용하여 \n과제 수행',
    detail_description: 'ETRI에서 주최한 DNA+드론 챌린지에서 대한드론응급협회 팀과 협력하여\n 실시간으로 드론의 임무 컴퓨터, 딥러닝 추론용 컴퓨터를 5G 네트워크로 연결\n드론 카메라로 찍은 이미지와 메타 데이터를 전처리하여 임무 컴퓨터, 딥러닝\n추론용 컴퓨터까지 지연시간 없이 전달하여 딥러닝 모델을 통해 추론',
    date_of_award: '2022-11-29',
    my_role: '실시간 드론 좌표 수신 및 전처리 쉘 스크립트 작성\n YOLOv7 학습 및 모니터링',
    stack: ['Embedded System', 'Raspberry Pi', 'MAVLink', 'YOLOv7', 'DeepLabV3+', 'Semantic Segmentation', 'Object Detection'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'DNA+ 드론챌린지 지정공모II 실시간 AI 서비스 챌린지 \n 과학기술정보통신부 장관상',
    description:
      '드론 서비스에 인공지능을 활용하여 비즈니스 모델 만들기 : 드론의 4K 카메라 이미지를 \n활용하여 실시간으로 농작지 재배면적 \n산출하고 크랙 검출',
    detail_description: 'ETRI에서 주최한 DNA+드론 챌린지에서 농작물 재배 모형 개발 및 면적 산출\n 알고리즘 개발을 목표로 함. 드론 시점의 이미지 데이터 부족을 해결하기 위해서\n 가상 객체를 생성하는 알고리즘 개발 날씨 조건에 강건한 모델을 위해 CycleGAN을\n활용한 이미지 증강으로 드론 챌린지 과제 수행하여 과학기술정보통신부 장관상 수상',
    date_of_award: '2022-11-29',
    my_role: 'MLOps에 따른 데이터 구축+정제+EDA 진행 후 DeepLabV3+통한 학습 및 모니터링\n면적 산출 후처리 알고리즘 개발',
    stack: ['Linux', 'CycleGAN', 'DeepLabV3+', 'YOLOv7', 'MLOps', 'Algorithm', 'Semantic Segmentation', 'Object Detection'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: '\n월간 데이콘 숫자 3D 이미지 분류 AI 경진대회 은상',
    description:
      '3D MNIST Dataset을 활용하여 이미지 \n분류하기 : RandomPCA + EfficientNetB7(Noisy Student) + TTA',
    detail_description: '3D MNIST인 숫자 손글씨 이미지를 활용하여 숫자 분류하기 \n데이터에 RandomPCA를 사용하여 차원 축소 후\n EfficientNetB7 (Noisy Student) 모델을 활용하여 학습\n TTA 전략 사용하여 대회 2등',
    date_of_award: '2022-10-19',
    my_role: 'PCA 실험하여 데이터 분석 \n데이터 어그멘테이션 적용',
    stack: ['Point Cloud', 'PCA', 'EfficientNet', 'TTA', '3D Image Classification', 'Data Visualization'],
    sourceCode: 'https://dacon.io/competitions/official/235951/codeshare/6637?page=1&dtype=recent',
    livePreview: 'https://dacon.io/competitions/official/235951/overview/description',
  },
  {
    name: '제 3회 삼육대학교 캡스톤디자인 경진대회 장려상',
    description:
      '아두이노와 온도 센서를 활용하여 얼굴인식 하면 사람의 체온를 확인할 수 있는 장치 개발',
    detail_description: '코로나 19 시기 비대면 체온 측정이 중요할 시기\n웹캠을 통해 사람의 얼굴을 인식하면 아두이노의 적외선 센서를 사용하여\n블루투스 모듈로 사람의 체온을 컴퓨터로 받아와 체온 측정하는 장치',
    date_of_award: '2021-12-10',
    my_role: 'RetinaNet을 활용하여 사람의 얼굴 인식하는 모형 추론',
    stack: ['Embedded System', 'Arduino', 'RetinaNet', 'Face Detection'],
    sourceCode: '',
    livePreview: '',
  },
  // {
  //   name: '2019 대학생 스마트 e모빌리티 경진대회 우수상',
  //   description:
  //     '',
  //   stack: [],
  //   sourceCode: '',
  //   livePreview: '',
  // },
]

const skills = [
  'Python',
  'PyTorch',
  'PyTorch-Lightning',
  'C++',
  'Qt',
  'Slack',
  'Git',
  'Docker',
  'MLOps'
]

const contacts = [
  {email: 'mm074111@gmail.com'},
  {phone: '010-3289-5209'}
]

export { header, about, papers, projects, awards, skills, contacts }
