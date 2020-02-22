# 25 Hours - 머신러닝 기반 회의록 웹앱 솔루션

__회의__와 관련된 4가지 Pain Point를 해결해주는 솔루션

## 1. 문제상황 규정

- 직장인들을 대상으로 '제일 아까운, 낭비되는 시간은 무엇이냐'고 물었을 때, 대부분의 사람들이 회의와 관련된 답을 내놓았다.
- 이때 회의라는 것은 상당히 추상적이므로 개념을 좁히기 위해 심화 분석을 진행하였다.
- 그 결과, 아래 네 가지의 Tasks가 실제로 시간을 많이 차지하는, '불필요한 반복작업'이라는 결론에 도달하였다.

![Problem Diagnoses](https://user-images.githubusercontent.com/26613280/75091590-64172700-55b2-11ea-88a8-d8f3aa92c3ac.png)

- 네 가지 Tasks란 위 PPT 슬라이드에서 나타나듯이,
  - 회의 시작 전 리마인드 하는 작업
  - 회의록을 작성하는 작업
  - 회의록을 보관하는 작업
  - 회의 내용을 보고하는 작업을 말한다. 이 네 가지를 문제상황으로 규정하였다.

## 2. 해결방안 도출

- 위 문제상황 규정 과정을 통해 아래 Solutions를 도출하였다.

![Solitions](https://user-images.githubusercontent.com/26613280/75091757-2ddaa700-55b4-11ea-9718-488968976a31.png)

- 네 가지 Solutions는 각각,
  - 체크리스트를 통한 리마인드 시간 단축
  - STT(Speech to text), 요약, 키워드 도출을 통한 회의록 작성 시간 단축
  - Cloud-based 파일 통합 보관을 통한 보관/탐색의 용이성 확보
  - 특정 클라이언트의 특정 부분만 공유할 수 있도록 하여 추가적인 자료 정리 시간 단축을 의미한다.
  
## 3. 기술 스택

1) FrontEnd
  - NodeJS
  - ExpressJS
  - EJS Template Engine

2) Backend
  - .NET Core 2.2
  - ASP.NET Core
  - MongoDB
  - OpenTextSummarizer
\* 상세한 백엔드 스펙 사항은 [별도의 레포지토리](https://github.com/KPMG-team-18-the-turtles/25hours-backend)에서 확인할 수 있다.

3) Microsoft Azure Services
  - Virtual Machines
  - NoSQL Database
  - Azure Storage
  - Azure Text Analytics
  - Azure Speech Recognition

## 4. Preview

![Preview-1](https://user-images.githubusercontent.com/26613280/75091874-7c3c7580-55b5-11ea-9736-a8a339e61849.png)

![Preview-2](https://user-images.githubusercontent.com/26613280/75091880-82325680-55b5-11ea-8d50-36e5ecddcaa5.png)

![Preview-3](https://user-images.githubusercontent.com/26613280/75091882-88c0ce00-55b5-11ea-99f8-6705367995dc.png)

## 5. 사업화 논의

- 비즈니스 관점에서 분석한, 본 솔루션의 장점은 다음과 같다.
  - 회사 중심의 데이터 관리 : Cloud Services를 이용해 Raw Data를 회사 차원에서 관리하므로 추후 데이터 관리 및 활용이 용이함
  - 장소 및 환경에 구애받지 않는 애플리케이션 : 별도의 장비가 필요하거나, 특정 장소에서만 사용할 수 있는 솔루션이 아니므로 사내 보급에 있어 압도적으로 유리함
  
- 이러한 특징을 대상으로 다음의 특징을 가진 사람들을 타겟으로 규정하였다.
  - 회의를 시도때도 없이 하는 사람들
  - 회의에 직접 참여하는 사람들
  - 회의를 follow up해야 하는 사람
  - 참석은 했으나 정리해야 하는 사람
  
본 솔루션은 이상의 결론으로 "클라이언트의 시간을 절약한다"는 최초의 목적을 달성하였다.
