// import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize, DataTypes) => {
  sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
        comment: `자동생성,난수 or ASIS ID`,
      },
      email: {
        type: DataTypes.STRING(254),
        allowNull: true,
        comment: `유저 이메일`,
      },
      password: {
        type: DataTypes.STRING(254),
        allowNull: true,
        comment: `비밀번호`,
      },
      profileImage: {
        type: DataTypes.STRING(254),
        allowNull: true,
        comment: `프로필 이미지`,
      },
      nickName: {
        type: DataTypes.STRING(20),
        allowNull: false,
        comment: `닉네임`,
      },
      status: {
        type: DataTypes.ENUM(
          'READY',
          'USER',
          'ADMIN',
          'BLOCKED',
          'WITHDRAW',
          'DORMANT',
        ),
        allowNull: false,
        defaultValue: 'READY',
        comment: `회원 상태`,
      },
      wishdrawNo: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: `탈퇴 사유 선택`,
      },
      withdrawMemo: {
        typeof: DataTypes.STRING(200),
        allowNull: true,
        comment: `탈퇴 사유 메모`,
      },
      isAsIs: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        comment: `기존 회원 여부`,
      },
      deletedAt: {
        type: DataTypes.DATETIME,
        allowNull: true,
        comment: `탈퇴 시각`,
      },
      createdAt: {
        type: DataTypes.DATETIME,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        comment: `생성일`,
      },
      updatedAt: {
        type: DataTypes.DATETIME,
        defaultValue: sequelize.literal(
          'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
        ),
        allowNull: false,
        comment: `수정일`,
      },
    },
    { modelName: 'User' },
  );
};
