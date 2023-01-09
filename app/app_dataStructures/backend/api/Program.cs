using Portfolio.Core.Services;
using Portfolio.DataStructures.Interfaces;
using Portfolio.DataStructures.Utils;

var builder = WebApplication.CreateBuilder(args);

builder.WebHost.UseUrls("http://*:3002");

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddTransient<TestService, TestService>();

// Services
builder.Services.AddScoped<ICollectionUtil<Queue<string>>, QueueUtil>();
builder.Services.AddScoped<ICollectionUtil<Stack<string>>, StackUtil>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
