const foodProfileQuery = [
    {
      "question": ["[닉네임]님 안녕하세요!","혼밥에서 구제해줄 메이트를 찾고계신가요?","[닉네임]님이 원하는 메이트를 작성해주시면 찾아 드릴게요!"],
      "direction": "incoming",
      "options": ["좋아!"]
    },
    {
      "question": ["어떤 분이랑 밥을 함께 드시고 싶나요?"],
      "direction": "incoming",
      "options": ["남성", "여성", "상관없어!"],
      "type": "gender"
    },
    {
        "question": ["아하! 알겠습니다", "전공멘트"],
        "direction": "incoming",
        "options": ["있어~", "상관없어!"],
        "type": "major"
    },
    {
      "question": ["원하시는 학번의 메이트가 있으실까요?"],
      "direction": "incoming",
      "options": ["동기", "선배", "후배", "상관없음"],
      "type": "studentNum"
    },
    {
      "question": ["원하시는 나이의 메이트가 있으면 말씀해주세요!"],
      "direction": "incoming",
      "options": ["메이트 나이 설정하기"],
      "type": "age"
    },
    {
      "question": [ "성격 멘트"],
      "direction": "incoming",
      "options": ["활기찬", "조용한","상관없어!"],
      "type": "mbti-EI"
    },
    {
      "question": [ "성격 멘트"],
      "direction": "incoming",
      "options": ["현실적", "창의적","상관없어!"],
      "type": "mbti-SN"
    },
    {
      "question": [ "성격 멘트"],
      "direction": "incoming",
      "options": ["객관적", "공감 만땅","상관없어!"],
      "type": "mbti-TF"
    },
    {
      "question": [ "성격 멘트"],
      "direction": "incoming",
      "options": ["체게적", "유동적","상관없어!"],
      "type": "mbti-JP"
    },
    {
      "question": [ "취미 멘트"],
      "direction": "incoming",
      "options": ["같으면 좋겠어","상관없어!"],
      "type": "hobby"
    },
    {
      "question": [ "네, 알겠습니다!", "메이트와 함께하고 싶은 요일을 선택해주세요!"],
      "direction": "incoming",
      "options": ["월", "화", "수", "목", "금"],
      "type": "date"
    },
    {
      "question": [ "이제 메이트와 함께하고 싶은 시간대 선택해주세요!"],
      "direction": "incoming",
      "options": ["점심", "저녁", "둘 다"],
      "type": "date"
    },
  ]
  export default foodProfileQuery;