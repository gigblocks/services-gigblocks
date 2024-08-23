export const GigBlocksAbi = JSON.parse(
    `
    [{"inputs":[],"name":"AccessControlBadConfirmation","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bytes32","name":"neededRole","type":"bytes32"}],"name":"AccessControlUnauthorizedAccount","type":"error"},{"inputs":[],"name":"FreelancerNotAssigned","type":"error"},{"inputs":[],"name":"InvalidDeadline","type":"error"},{"inputs":[],"name":"InvalidJobId","type":"error"},{"inputs":[],"name":"InvalidJobStatus","type":"error"},{"inputs":[],"name":"InvalidPaymentAmount","type":"error"},{"inputs":[],"name":"InvalidUserType","type":"error"},{"inputs":[],"name":"JobDeadlinePassed","type":"error"},{"inputs":[],"name":"JobDoesNotExist","type":"error"},{"inputs":[],"name":"JobNotApproved","type":"error"},{"inputs":[],"name":"NotClient","type":"error"},{"inputs":[],"name":"NotFreelancer","type":"error"},{"inputs":[],"name":"NotJobOwner","type":"error"},{"inputs":[],"name":"OffsetOutOfBounds","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"PaymentAlreadyDeposited","type":"error"},{"inputs":[],"name":"PaymentAlreadyReleased","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"inputs":[],"name":"UserAlreadyRegistered","type":"error"},{"inputs":[],"name":"UserNotRegistered","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"jobId","type":"uint256"},{"indexed":true,"internalType":"address","name":"applicant","type":"address"}],"name":"ApplicationSubmitted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"jobId","type":"uint256"},{"indexed":true,"internalType":"address","name":"freelancer","type":"address"},{"indexed":false,"internalType":"uint256","name":"payment","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"FreelancerAssigned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"jobId","type":"uint256"}],"name":"JobApproved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"jobId","type":"uint256"}],"name":"JobCompleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"jobId","type":"uint256"},{"indexed":true,"internalType":"address","name":"client","type":"address"},{"indexed":false,"internalType":"string","name":"jobDetailsIPFS","type":"string"},{"indexed":false,"internalType":"uint256","name":"payment","type":"uint256"},{"indexed":false,"internalType":"enum GigBlocksEnums.JobCategory","name":"category","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"JobCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"jobId","type":"uint256"},{"indexed":false,"internalType":"string","name":"jobDetailsIPFS","type":"string"}],"name":"JobUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"jobId","type":"uint256"},{"indexed":true,"internalType":"address","name":"payer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentDeposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"jobId","type":"uint256"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"enum GigBlocksEnums.JobCategory[]","name":"preferences","type":"uint8[]"}],"name":"PreferencesUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"string","name":"profileIPFS","type":"string"}],"name":"ProfileUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"registrationDate","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isFreelancer","type":"bool"},{"indexed":false,"internalType":"bool","name":"isClient","type":"bool"}],"name":"UserRegistered","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"activeJobs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_jobId","type":"uint256"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_email","type":"string"},{"internalType":"uint256","name":"_bidAmount","type":"uint256"},{"internalType":"uint256","name":"_bidTime","type":"uint256"},{"internalType":"string","name":"_coverLetter","type":"string"}],"name":"applyForJob","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_jobId","type":"uint256"}],"name":"approveJob","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_jobId","type":"uint256"},{"internalType":"address","name":"_freelancer","type":"address"},{"internalType":"uint256","name":"_payment","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"}],"name":"assignFreelancer","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_jobId","type":"uint256"}],"name":"claimPayment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_jobId","type":"uint256"}],"name":"completeJob","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_jobDetailsIPFS","type":"string"},{"internalType":"enum GigBlocksEnums.JobCategory","name":"_category","type":"uint8"}],"name":"createJob","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"escrows","outputs":[{"internalType":"address","name":"payer","type":"address"},{"internalType":"address","name":"payee","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"released","type":"bool"},{"internalType":"bool","name":"refunded","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getActiveJobCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_offset","type":"uint256"},{"internalType":"uint256","name":"_limit","type":"uint256"}],"name":"getActiveJobs","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"client","type":"address"},{"internalType":"address","name":"freelancer","type":"address"},{"internalType":"string","name":"jobDetailsIPFS","type":"string"},{"internalType":"uint256","name":"payment","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"isPaid","type":"bool"},{"internalType":"enum GigBlocksEnums.JobCategory","name":"category","type":"uint8"},{"internalType":"enum GigBlocksEnums.JobStatus","name":"status","type":"uint8"},{"internalType":"uint256","name":"applicantCount","type":"uint256"}],"internalType":"struct IGigBlocks.Job[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_client","type":"address"}],"name":"getClientJobCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_client","type":"address"},{"internalType":"uint256","name":"_offset","type":"uint256"},{"internalType":"uint256","name":"_limit","type":"uint256"}],"name":"getClientJobs","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"client","type":"address"},{"internalType":"address","name":"freelancer","type":"address"},{"internalType":"string","name":"jobDetailsIPFS","type":"string"},{"internalType":"uint256","name":"payment","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"isPaid","type":"bool"},{"internalType":"enum GigBlocksEnums.JobCategory","name":"category","type":"uint8"},{"internalType":"enum GigBlocksEnums.JobStatus","name":"status","type":"uint8"},{"internalType":"uint256","name":"applicantCount","type":"uint256"}],"internalType":"struct IGigBlocks.Job[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_freelancer","type":"address"}],"name":"getFreelancerJobCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_freelancer","type":"address"},{"internalType":"uint256","name":"_offset","type":"uint256"},{"internalType":"uint256","name":"_limit","type":"uint256"}],"name":"getFreelancerJobs","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"client","type":"address"},{"internalType":"address","name":"freelancer","type":"address"},{"internalType":"string","name":"jobDetailsIPFS","type":"string"},{"internalType":"uint256","name":"payment","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"isPaid","type":"bool"},{"internalType":"enum GigBlocksEnums.JobCategory","name":"category","type":"uint8"},{"internalType":"enum GigBlocksEnums.JobStatus","name":"status","type":"uint8"},{"internalType":"uint256","name":"applicantCount","type":"uint256"}],"internalType":"struct IGigBlocks.Job[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_jobId","type":"uint256"}],"name":"getJobApplicantCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_jobId","type":"uint256"},{"internalType":"uint256","name":"_offset","type":"uint256"},{"internalType":"uint256","name":"_limit","type":"uint256"}],"name":"getJobApplicants","outputs":[{"components":[{"internalType":"string","name":"freelancerName","type":"string"},{"internalType":"address","name":"freelancerWalletAddress","type":"address"},{"internalType":"string","name":"freelancerEmail","type":"string"},{"internalType":"uint256","name":"bidAmount","type":"uint256"},{"internalType":"uint256","name":"bidTime","type":"uint256"},{"internalType":"string","name":"coverLetter","type":"string"}],"internalType":"struct IGigBlocks.Applicant[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_jobId","type":"uint256"}],"name":"getJobById","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"client","type":"address"},{"internalType":"address","name":"freelancer","type":"address"},{"internalType":"string","name":"jobDetailsIPFS","type":"string"},{"internalType":"uint256","name":"payment","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"isPaid","type":"bool"},{"internalType":"enum GigBlocksEnums.JobCategory","name":"category","type":"uint8"},{"internalType":"enum GigBlocksEnums.JobStatus","name":"status","type":"uint8"},{"internalType":"uint256","name":"applicantCount","type":"uint256"}],"internalType":"struct IGigBlocks.Job","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserProfile","outputs":[{"components":[{"internalType":"string","name":"profileIPFS","type":"string"},{"internalType":"uint8","name":"flags","type":"uint8"},{"internalType":"uint256","name":"registrationDate","type":"uint256"},{"internalType":"enum GigBlocksEnums.JobCategory[]","name":"preferences","type":"uint8[]"}],"internalType":"struct GigBlocksUserManager.UserProfile","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"isClient","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"isFreelancer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"isRegistered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"jobIds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"jobs","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"client","type":"address"},{"internalType":"address","name":"freelancer","type":"address"},{"internalType":"string","name":"jobDetailsIPFS","type":"string"},{"internalType":"uint256","name":"payment","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"isPaid","type":"bool"},{"internalType":"enum GigBlocksEnums.JobCategory","name":"category","type":"uint8"},{"internalType":"enum GigBlocksEnums.JobStatus","name":"status","type":"uint8"},{"internalType":"uint256","name":"applicantCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"platformFeePercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_profileIPFS","type":"string"},{"internalType":"enum GigBlocksEnums.JobCategory[]","name":"_preferences","type":"uint8[]"},{"internalType":"bool","name":"_isFreelancer","type":"bool"},{"internalType":"bool","name":"_isClient","type":"bool"}],"name":"register","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"callerConfirmation","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_jobId","type":"uint256"},{"internalType":"string","name":"_jobDetailsIPFS","type":"string"}],"name":"updateJobDetails","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_profileIPFS","type":"string"}],"name":"updateProfileIPFS","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"enum GigBlocksEnums.JobCategory[]","name":"_preferences","type":"uint8[]"}],"name":"updateUserPreferences","outputs":[],"stateMutability":"nonpayable","type":"function"}]
    `)

export const ContractAddress = "0x3EE23782609a89797962547d0C00ce7783438597"
