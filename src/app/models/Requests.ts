export class Requests{
    public host  : string = "https://naukri-api.herokuapp.com/";
    
    public login_req : string =  "api/v1/user/login"
    public regiser_user: string = "api/v1/user/signup";
    public job_post: string="api/v1/job/create";
    public job_applicant: string="api/v1/applicant/create";
    public get_all_job: string="api/v1/job/all";
    public get_job_rec :string="api/v1/job/recruiter/";
    public get_job_id :string="api/v1/job/";
    public get_applicant_By_job_can :string="api/v1/applicant/job/candidate/";
    public get_applicant_By_job :string="api/v1/applicant/job/";

}