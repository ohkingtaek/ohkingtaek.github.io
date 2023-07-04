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
    keywords: ['Image Restoration', 'Filter Removal', 'Color Attention', 'Ensemble Learning', 'Light-Weight'],
    sourceCode: 'https://github.com/hnvlab-syu/CAIR',
    livePreview: 'https://arxiv.org/pdf/2208.14039.pdf',
  },
  {
    name: '\nAim 2022 challenge on instagram filter removal: Methods and results',
    description:
      '인스타그램 필터 제거 챌린지 레포트',
      keywords: ['Filter Removal', 'Image Restoration', 'Image-to-Image Translation'],
    sourceCode: 'https://github.com/hnvlab-syu/CAIR',
    livePreview: 'https://arxiv.org/pdf/2210.08997.pdf',
  },
  {
    name: '\nNTIRE 2023 image shadow removal challenge report',
    description:
      '\n 이미지 그림자 제거 챌린지 레포트',
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
    stack: ['Yolact', 'Real-Time', 'Construction Safety'],
  },
  {
    name: '\n스마트 홈 카메라를 이용한 \n인공지능기반 영유아 이상 \n징후 및 정상 운동발달 \n모니터링 연구',
    description:
      '인공지능 기반 영유아 이상 징후 데이터셋 \n구축(Azure Kinect 카메라와 자체 제작 \n뷰어 사용) 및 PyQt 사용하여 GUI 개발',
    stack: ['Azure Kinect', 'PyQt'],
    sourceCode: 'https://github.com/patrashu/pykinect-recorder',
  },
  {
    name: '산학연계 SW캡스톤 디자인 프로젝트 - 인공지능 기반 \n방문자 관리 시스템',
    description:
      '실제 매장 CCTV 영상을 활용하여 객체인식, 객체추적, 나이와 성별 예측 통해 시간별 방문자수, 연령대, 성별 시각화하여 마케팅 활용',
    stack: ['Object Detection', 'Object Tracking', 'Face Detection', 'EfficientNet', 'BoT-SORT', 'YOLOv8', 'PyTorch', 'PyTorch-Lightning', 'PyQt'],
    sourceCode: 'https://github.com/patrashu/cnai',
    livePreview: '',
  },
  {
    name: 'AI 양재 허브 인공지능 오픈소스 경진대회',
    description:
      '이미지 초해상화 모델인 SwinIR과 HAT-L을 통해 품질이 저하된 저해상도 촬영 이미지를 4배 높여 고품질로 만드는 작업',
    stack: ['Super Resolution', 'SwinIR', 'HAT-L', 'Self-Ensemble', 'PyTorch'],
    sourceCode: 'https://github.com/ohkingtaek/Dacon_Super_Resolution',
    livePreview: 'https://dacon.io/competitions/official/235977/codeshare/6900?page=1&dtype=recent',
  },
  {
    name: '딥러닝 및 실습 프로젝트 \n딥러닝 기반 의상 교체 시스템',
    description:
      '컴퓨터 비전 딥러닝 기술을 활용하여 사용자가 입어보고 싶은 의상을 가상으로 피팅해주는 시스템',
    stack: ['Virtual Try-On', 'Semantic Segmentation', 'Pose Estimation', 'Human Parsing', 'ACGPN', 'TPS', 'SwinIR', 'PyTorch', 'PyQt'],
    sourceCode: 'https://github.com/patrashu/clothes_matching',
    livePreview: '',
  },
  {
    name: '컴퓨터 비전 프로젝트 \n딥러닝 기반 포토샵 프로그램',
    description:
      '포토샵에 있는 기능인 이미지 기본 기능부터 딥러닝을 활용한 기술까지 활용하여 GUI 내에서 내 사진을 넣고 다양한 기능을 사용해볼 수 있는 프로그램',
    stack: ['API', 'Computer Vision', 'EfficientNet', 'YOLO', 'PyQt'],
    sourceCode: 'https://github.com/ohkingtaek/Pyside_Photoshop',
    livePreview: '',
  },
]

const awards = [
  {
    name: 'DNA+ 드론챌린지 지정공모I 실시간 드론 서비스 챌린지 \n 한국무인이동체연구조합 \n포럼상',
    description:
      '드론의 4K 카메라 이미지와 좌표 실시간 수신하여 YOLOv7과 DeepLabV3+를 사용하여 과제 수행',
    stack: ['Embedded System', 'YOLOv7', 'DeepLabV3+'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'DNA+ 드론챌린지 지정공모II 실시간 AI 서비스 챌린지 \n 과학기술정보통신부 장관상',
    description:
      '드론 시점의 이미지 데이터 부족을 해결하기 위해서, 가상 객체를 생성하는 알고리즘 개발 및 날씨 조건에 강건한 모델을 위해 CycleGAN을 활용한 이미지 증강으로 드론 챌린지 과제 수행하여 과기부 장관상 수상',
    stack: ['CycleGAN', 'DeepLabV3+', 'YOLOv7'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: '\n월간 데이콘 숫자 3D 이미지 분류 AI 경진대회 은상',
    description:
      'RandomPCA + EfficientNetB7(Noisy Student) + TTA',
    stack: ['PCA', 'EfficientNet', 'TTA', '3D Image Classification'],
    sourceCode: 'https://dacon.io/competitions/official/235951/codeshare/6637?page=1&dtype=recent',
    livePreview: 'https://dacon.io/competitions/official/235951/overview/description',
  },
  {
    name: '제 3회 삼육대학교 캡스톤디자인 경진대회 장려상 ',
    description:
      '아두이노와 온도 센서를 활용하여 얼굴인식 하면 사람의 체온를 확인할 수 있는 장치 개발',
    stack: ['Embedded System', 'Face Detection', 'Arduino'],
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
]

const contacts = [
  {email: 'mm074111@gmail.com'},
  {phone: '010-3289-5209'}
]

export { header, about, papers, projects, awards, skills, contacts }
